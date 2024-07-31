import styled from "styled-components";
import Input from "../common/Input";

const AccountFormTemplateBlock = styled.div``;

const AccountFormTemplate = ({ onAdminFormChange, adminForm }) => {
  return (
    <AccountFormTemplateBlock>
      <Input
        name="adminId"
        onChange={onAdminFormChange}
        value={adminForm.adminId}
        placeholder="ID"
      />
      <br />
      <Input
        name="password"
        onChange={onAdminFormChange}
        value={adminForm.password}
        placeholder="PW"
      />
      영문, 숫자, 특수문자를 포함한 8~15 자리의 패스워드를 설정해주세요.
      <br />
      <Input
        name="name"
        onChange={onAdminFormChange}
        value={adminForm.name}
        placeholder="name"
      />
      <br />
      <button>저장</button>
    </AccountFormTemplateBlock>
  );
};

export default AccountFormTemplate;
