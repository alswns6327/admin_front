import styled from "styled-components";
import Input from "../common/Input";
import Button from "../common/Button";

const LoginTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(30, 30, 30, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
  }
  input {
    margin-bottom: 1rem;
  }
`;

const LoginTemplate = ({ onChange, onClick, onEnter }) => {
  return (
    <LoginTemplateBlock>
      <h2>ADMIN</h2>
      <span>
        <Input
          name="adminId"
          onChange={onChange}
          onKeyUp={onEnter}
          placeholder="ID"
        />
      </span>
      <span>
        <Input
          name="password"
          onChange={onChange}
          onKeyUp={onEnter}
          type="password"
          placeholder="PW"
        />
      </span>
      <Button onClick={onClick}>로그인</Button>
    </LoginTemplateBlock>
  );
};

export default LoginTemplate;
