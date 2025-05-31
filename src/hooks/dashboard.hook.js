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

//create job
export const useCreateJob = () => {
  const navigate = useNavigate();

  const form = useForm({
    // resolver: zodResolver(createjobSchema),
    defaultValues: {
      property_id: "",
      title: "",
      description: "",
      date_time: "",
      error_code: "",
      error_code_image: null,
      water_pressure_level: "",
      tools_info: null,
      additional_info: null,
      image: null,
      video: null,
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

      const res = await axiosPrivate.post("/property-job", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message || "Property created successfully");
      } else {
        toast.error(data?.message || "Failed to create property");
      }
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message || "Failed to create property";
      toast.error(message);
    },
  });

  return { form, mutate, isPending };
};

//get property type
export const useGetProperties = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/property-type");
      return res.data;
    },
  });
  return { properties: data?.data, isLoading };
};

//get property
export const useGetPropertyAddress = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["properties-address"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/property/dropdown");
      return res.data;
    },
  });
  return { propertiesAddress: data?.data, isLoading };
};

//get all jobs
export const useGetAllJobs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["all-jobs"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/property-job/pending?per_page=25");
      return res.data?.data;
    },
  });
  return { allJobs: data, isLoading };
};
