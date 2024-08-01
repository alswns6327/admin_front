import styled from "styled-components";
import palette from "../../lib/styles/palette";

const HeaderBlock = styled.div`
  width: calc(100vw - 150px);
  margin-left: 150px;
  height: 10vh;
  background-color: ${palette.gray[8]};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <h1>MJ FIRST ADMIN PAGE APPLICATION</h1>
    </HeaderBlock>
  );
};

export default Header;
