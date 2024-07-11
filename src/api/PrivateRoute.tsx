import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Sidebar2 from "../Components/Sidebar2";
// import Navbar from "../Components/Navbar";
import Sidebar from "../pages/sidebar/Sidebar";

const PrivateRoutes: React.FC = () => {
  const navigate = useNavigate();

  const getLocalStorageItem = (key: string): string | null => {
    const item = localStorage.getItem(key);
    return item ? item : null;
  };

  useEffect(() => {
    const token = getLocalStorageItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const token = getLocalStorageItem("token");
  return token ? (
    <>
      <Sidebar />
    </>
  ) : null;
};

export default PrivateRoutes;
