import { axiosPrivate } from "@/lib/axios.config";
import { useMutation } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
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
    // resolver: zodResolver(propertySchema),
    defaultValues: {
      label: "",
      street: "",
      apartment: "",
      country_id: "",
      state_id: "",
      city_id: "",
      zip_id: "",
      latitude: null,
      longitude: null,
      boiler_type_id: "",
      boiler_model_id: "",
      property_type_id: "",
      service_id: "",
      quantity: "",
      // purchase_year: "",
      last_service_date: "",
      location: "",
      accessability_info: "",
      price: "",
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

      const res = await axiosPrivate.post("/property", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },

    onSuccess: (data) => {
      //debugger;
      if (data?.success) {
        toast.success(data?.message || "Property created successfully");
        navigate("/dashboard");
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
//getprice
export const useGetPropertyPrice = () => {
  return useMutation({
    mutationFn: async (body) => {
      const res = await axiosPrivate.post("/property/price", body);
      return res.data;
    },
  });
};
//get packages

export const useGetGeneralPackages = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/package/general");
      return res.data;
    },
  });
  return { generalPackages: data?.data, isLoading };
};

export const useGetLandlordPackages = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["package"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/package/landlord");
      return res.data;
    },
  });
  return { landlordPackages: data?.data, isLoading };
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

//boiler type

export const useGetBoilertype = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["boilertype"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/boiler-type");
      return res.data;
    },
  });
  return { boilertype: data?.data, isLoading };
};

//boiler model

export const useGetBoilermodel = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["boilermodel"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/boiler-model");
      return res.data;
    },
  });
  return { boilermodel: data?.data, isLoading };
};

//property-type

export const useGetPropertytype = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["propertytype"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/property-type");
      return res.data;
    },
  });
  return { propertytype: data?.data, isLoading };
};
