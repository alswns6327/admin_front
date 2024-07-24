import styled from "styled-components";

const MenuFormTemplateBlock = styled.div``;

const MenuFormTemplate = ({ onChangeMenuForm, saveMenu }) => {
  return (
    <MenuFormTemplateBlock>
      <input onChange={onChangeMenuForm} name="menuName" placeholder="메뉴명" />
      <input onChange={onChangeMenuForm} name="menuPath" placeholder="경로" />
      <button onClick={saveMenu}>저장</button>
    </MenuFormTemplateBlock>
  );
};

export default MenuFormTemplate;
