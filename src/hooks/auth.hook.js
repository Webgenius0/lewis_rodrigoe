import { axiosPublic } from "@/lib/axios.config";
import { signInSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router";

export const useSignIn = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const redirectUrl = params.get("redirect");

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (credentials) => {
      const res = await axiosPublic.post("/auth/login", credentials);
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message || "Sign in successfully");
        const token = data?.token;
        localStorage.setItem("token", token);
        if (redirectUrl) {
          navigate(redirectUrl);
        } else {
          navigate("/");
        }
      } else {
        toast.error(data?.message || "Failed to sign in");
      }
    },
    onError: (error) => {
      const message = error?.response?.data?.message;
      if (
        typeof message === "string" &&
        message.toLowerCase().includes("email")
      ) {
        form.setError("email", { message });
      } else {
        toast.error(message || "Failed to sign in");
      }
    },
  });

  return { form, mutate, isPending };
};
