import styled from "styled-components";
import palette from "../../lib/styles/palette";

const ButtonBlock = styled.button`
  border-radius: 7px;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.25rem 0.6rem;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[3]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

const Button = (props) => {
  return <ButtonBlock {...props} />;
};

export default Button;
