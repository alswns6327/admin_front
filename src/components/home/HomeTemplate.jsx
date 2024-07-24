import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MenuPage from "../../pages/MenuPage";
import AccountPage from "../../pages/AccountPage";

const HomeTemplateBlock = styled.div``;

const HomeTemplate = () => {
  return (
    <HomeTemplateBlock>
      <Routes>
        <Route path="account" element={<AccountPage />} />
        <Route path="code" element={<>code</>} />
        <Route path="menu" element={<MenuPage />} />
      </Routes>
    </HomeTemplateBlock>
  );
};

export default HomeTemplate;
