import { contactSchema } from '@/schemas/contact.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export const useContact = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      address: '',
      subjects: '',
      message: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return {
        success: true,
        message: 'Contact form submitted successfully!',
        data: payload,
      };
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message || 'Contact form submitted!');
        form.reset();
      } else {
        toast.error(data?.message || 'Failed to submit contact form');
      }
    },
    onError: () => {
      toast.error('Failed to submit contact form');
    },
  });

  return { form, mutate, isPending };
};
