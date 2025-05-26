import { axiosPrivate } from "@/lib/axios.config";
import { updateUserSchema } from "@/schemas/updateuser.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const useGetUserdata = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userdata"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/auth-user/dashboard");
      return res.data;
    },
  });
  return { userdata: data?.data, isLoading };
};

export const useUpdateUser = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      avatar: "",
      gender: "",
    },
  });

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosPrivate.post("/auth-user", data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });

  return { form, updateUser, isLoading };
};
