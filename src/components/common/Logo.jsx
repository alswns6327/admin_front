import styled from "styled-components";
import palette from "../../lib/styles/palette";

const LogoBlock = styled.div`
  width: 150px;
  height: 10vh;
  background-color: ${palette.gray[5]};
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
`;

const Logo = () => {
  return (
    <LogoBlock>
      <h1>ADMIN</h1>
    </LogoBlock>
  );
};

export default Logo;
