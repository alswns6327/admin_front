import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeForm from "../containers/home/HomeForm";

const HomePage = () => {
  const navigater = useNavigate();

  useEffect(function checkAuth() {
    if (false) {
      navigater("login");
    }
  }, []);

  return (
    <>
      <HomeForm />
    </>
  );
};

export default HomePage;
