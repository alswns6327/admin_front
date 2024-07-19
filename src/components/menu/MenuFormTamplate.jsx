import styled from "styled-components";

const MenuFormTamplateBlock = styled.div``;

const MenuFormTamplate = ({ onChangeMenuForm, saveMenu }) => {
  return (
    <MenuFormTamplateBlock>
      <input onChange={onChangeMenuForm} name="menuName" placeholder="메뉴명" />
      <input onChange={onChangeMenuForm} name="menuPath" placeholder="경로" />
      <button onClick={saveMenu}>저장</button>
    </MenuFormTamplateBlock>
  );
};

export default MenuFormTamplate;
