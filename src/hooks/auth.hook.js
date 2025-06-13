import { axiosPrivate, axiosPublic } from '@/lib/axios.config';
import {
  matchOtpSchema,
  resetPasswordSchema,
  sendOtpSchema,
  signInSchema,
  signUpSchema,
  updatePasswordSchema,
} from '@/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate, useSearchParams } from 'react-router';

export const useSignUp = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      gender: '',
      avatar: null,
      package_id: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      const res = await axiosPublic.post('/auth/register', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message || 'User created successfully');
        const token = data?.data?.token;
        localStorage.setItem('token', token);
        const user = data?.data?.user;
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      } else {
        toast.error(data?.message || 'Failed to create user');
      }
    },
    onError: (error) => {
      const message = error?.response?.data?.message || 'Failed to create user';
      toast.error(message);
      if (message.includes('email')) {
        form.setError('email', { message });
      }
    },
  });

  return { form, mutate, isPending };
};

export const useSignIn = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const redirectUrl = params.get('redirect');

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (credentials) => {
      const res = await axiosPublic.post('/auth/login', credentials);
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message || 'Sign in successfully');
        const token = data?.data?.token;
        localStorage.setItem('token', token);
        const user = data?.data?.user;
        localStorage.setItem('user', JSON.stringify(user));
        if (redirectUrl) {
          navigate(redirectUrl);
        } else {
          navigate('/dashboard');
        }
      } else {
        toast.error(data?.message || 'Failed to sign in');
      }
    },
    onError: (error) => {
      const message = error?.response?.data?.message;
      if (
        typeof message === 'string' &&
        message.toLowerCase().includes('email')
      ) {
        form.setError('email', { message });
      } else {
        toast.error(message || 'Failed to sign in');
      }
    },
  });

  return { form, mutate, isPending };
};

export const useLogout = () => {
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => {
      const token = localStorage.getItem('token');
      return await axiosPublic.post(
        '/auth/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
      navigate('/sign-in');
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || 'Failed to logout. Try again.'
      );
    },
  });

  return { logout, isPending };
};
// send OTP function

export const useSendOtp = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(sendOtpSchema),
    defaultValues: {
      email: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email }) => {
      const payload = {
        email: email,
        operation: 'password',
      };
      const { data } = await axiosPublic.post(
        '/auth/forget-password/otp-send',
        payload
      );
      if (!data?.success) {
        throw new Error(data?.message || 'Failed to send OTP');
      }
      return data;
    },
    onSuccess: (data) => {
      navigate('/verify-otp', {
        state: { email: form.watch('email') },
      });
      toast.success(data?.message || 'OTP sent successfully');
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || 'Failed to send OTP');
    },
  });

  return { form, mutate, isPending };
};

//  OTP Match function
export const useMatchOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  const form = useForm({
    resolver: zodResolver(matchOtpSchema),
    defaultValues: {
      email,
      operation: 'password',
      otp0: '',
      otp1: '',
      otp2: '',
      otp3: '',
    },
  });

  useEffect(() => {
    if (email) {
      form.reset({
        email,
        operation: 'password',
        otp0: '',
        otp1: '',
        otp2: '',
        otp3: '',
      });
    }
  }, [email]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const otp = `${formData.otp0}${formData.otp1}${formData.otp2}${formData.otp3}`;
      const payload = {
        email: formData.email,
        otp,
        operation: formData.operation,
      };

      const { data } = await axiosPublic.post(
        '/auth/forget-password/otp-match',
        payload
      );

      return data;
    },
    onSuccess: (data) => {
      navigate('/new-password', { state: { email: form.watch('email') } });
      toast.success(data.message || 'OTP Verified');
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || 'OTP verification failed');
    },
  });

  return {
    form,
    matchOtp: mutate,
    isMatching: isPending,
  };
};

//  Reset-password function
export const useResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email,
      password: '',
      password_confirmation: '',
    },
  });

  useEffect(() => {
    if (email) {
      form.reset({
        email,
        password: '',
        password_confirmation: '',
      });
    }
  }, [email]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const payload = {
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      };

      const { data } = await axiosPublic.post(
        '/auth/forget-password/reset-password',
        payload
      );

      if (!data?.success) {
        throw new Error(data?.message || 'Reset failed');
      }

      return data;
    },
    onSuccess: (data) => {
      toast.success(data.message || 'Password reset successful');
      navigate('/sign-in');
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || 'Password reset failed');
    },
  });

  return {
    form,
    resetPassword: mutate,
    isResetting: isPending,
  };
};

//update password function
export const useUpdatePassword = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      old_password: '',
      password: '',
      password_confirmation: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const payload = {
        old_password: formData.old_password,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      };

      const { data } = await axiosPrivate.patch('auth-user/password', payload);

      if (!data?.success) {
        throw new Error(data?.message || 'Reset failed');
      }

      return data;
    },
    onSuccess: (data) => {
      toast.success(data.message || 'Password update successful');
      navigate('/sign-in');
    },
    onError: (error) => {
      const message = error?.response?.data?.message || error.message;
      toast.error(message || 'Password update failed');
    },
  });

  return {
    form,
    updatePassword: mutate,
    isUpdating: isPending,
  };
};
