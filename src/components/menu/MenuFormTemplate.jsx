import styled from "styled-components";
import Input from "../common/Input";

const MenuFormTemplateBlock = styled.div``;

const MenuFormTemplate = ({ onChangeMenuForm, saveMenu }) => {
  return (
    <MenuFormTemplateBlock>
      <Input onChange={onChangeMenuForm} name="menuName" placeholder="메뉴명" />
      <Input onChange={onChangeMenuForm} name="menuPath" placeholder="경로" />
      <button onClick={saveMenu}>저장</button>
    </MenuFormTemplateBlock>
  );
};

export default MenuFormTemplate;
