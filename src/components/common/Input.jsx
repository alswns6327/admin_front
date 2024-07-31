import styled from "styled-components";
import palette from "../../lib/styles/palette";

const InputBlock = styled.input`
  font-size: 1rem;
  border: none;
  width: 100%;
  border-radius: 5px;
`;

const Input = (props) => {
  return <InputBlock {...props} />;
};

export default Input;
