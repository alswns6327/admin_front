import styled from "styled-components";

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

const LoginTemplate = ({ onChange, onClick }) => {
  return (
    <LoginTemplateBlock>
      <h2>로그인</h2>
      <span>
        <span>id :</span> <input name="adminId" onChange={onChange} />
      </span>
      <span>
        <span>pw :</span> <input name="password" onChange={onChange} />
      </span>
      <button onClick={onClick}>로그인</button>
    </LoginTemplateBlock>
  );
};

export default LoginTemplate;
