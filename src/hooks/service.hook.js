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

      const res = await axios.post("/property", formData, {
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

//get country
export const useGetCountrys = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["country"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/country");
      return res.data;
    },
  });
  return { country: data?.data, isLoading };
};

//get state
export const useGetStates = (countryId) => {
  console.log({ countryId });
  const { data, isLoading } = useQuery({
    queryKey: ["state", countryId],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/country/${countryId}/state`);
      return res.data;
    },
    enabled: !!countryId,
  });

  return { state: data?.data, isLoading };
};

//get city
export const useGetCitys = (cityId) => {
  console.log({ cityId });
  const { data, isLoading } = useQuery({
    queryKey: ["city", cityId],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/state/${cityId}/city`);
      return res.data;
    },
    enabled: !!cityId,
  });

  return { city: data?.data, isLoading };
};

//get zip
export const useGetZip = (zipId) => {
  console.log({ zipId });
  const { data, isLoading } = useQuery({
    queryKey: ["zip", zipId],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/city/${zipId}/zip`);
      return res.data;
    },
    enabled: !!zipId,
  });

  return { zip: data?.data, isLoading };
};
