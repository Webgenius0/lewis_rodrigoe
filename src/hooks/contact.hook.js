import { contactSchema } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router";

export const contact = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const redirectUrl = params.get("redirect");

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      address: "",
      subjects: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (credentials) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return {
        success: true,
        message: "Contact form submitted successfully!",
        data: {
          token: "fake-token",
          user: { name: credentials.name, email: credentials.email },
        },
      };
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message || "Contact form submitted!");
        // if (redirectUrl) {
        //   navigate(redirectUrl);
        // } else {
        //   navigate("/dashboard");
        // }
      } else {
        toast.error(data?.message || "Failed to submit contact form");
      }
    },
    onError: (error) => {
      toast.error("Failed to submit contact form");
    },
  });

  return { form, mutate, isPending };
};
