import React, { useEffect } from "react";
import MenuNav from "../components/home/MenuNav";
import HomeTemplate from "../components/home/HomeTemplate";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigater = useNavigate();

  useEffect(function checkAuth() {
    if (false) {
      navigater("login");
    }
  }, []);

  return (
    <>
      <MenuNav />
      <HomeTemplate />
    </>
  );
};

export default HomePage;
