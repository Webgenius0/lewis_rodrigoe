import { axiosPrivate } from "@/lib/axios.config";
import { propertySchema } from "@/schemas/service.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const useGetService = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/service");
      return res.data;
    },
  });
  return { service: data?.data, isLoading };
};

export const useCreateProperty = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      label: "",
      street: "",
      apartment: "",
      country_id: "",
      state_id: "",
      city_id: "",
      zip_id: "",
      latitude: "",
      longitude: "",
      boiler_type_id: "",
      boiler_model_id: "",
      property_type_id: "",
      service_id: "",
      quantity: "",
      purchase_year: "",
      last_service_date: "",
      location: "",
      accessability_info: "",
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

      const res = await axios.post("/api/v1/property", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.message || "Property created successfully");
        navigate("/properties");
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
