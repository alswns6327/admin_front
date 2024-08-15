import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MenuPage from "../../pages/MenuPage";
import AccountPage from "../../pages/AccountPage";
import palette from "../../lib/styles/palette";
import CodeContainer from "../../containers/code/CodeContainer";

const HomeTemplateBlock = styled.div`
  margin-left: 150px;
  padding-top: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.gray[3]};
  height: calc(100vh - 11vh);
  width: calc(100wh - 150px);
`;

const HomeTemplate = () => {
  return (
    <HomeTemplateBlock>
      <Routes>
        <Route path="account" element={<AccountPage />} />
        <Route path="code" element={<CodeContainer />} />
        <Route path="menu" element={<MenuPage />} />
      </Routes>
    </HomeTemplateBlock>
  );
};

export default HomeTemplate;
