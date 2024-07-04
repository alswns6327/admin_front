import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const HomeTemplateBlock = styled.div``;

const HomeTemplate = () => {
  return (
    <HomeTemplateBlock>
      <Routes>
        <Route path="account" element={<>adasdasdasdccount</>} />
        <Route path="code" element={<>code</>} />
        <Route path="menu" element={<>menu</>} />
      </Routes>
    </HomeTemplateBlock>
  );
};

export default HomeTemplate;
