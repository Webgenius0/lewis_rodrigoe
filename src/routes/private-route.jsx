/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate(`/api/v1/auth/login`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (!token) return null;

  return children;
}
