import styled from "styled-components";

const AccountListTemplateBlock = styled.div``;

const AccountListTemplate = ({ adminList }) => {
  return (
    <AccountListTemplateBlock>
      {adminList.map((admin) => (
        <div key={admin.adminId}>
          {admin.adminId} ({admin.name})
        </div>
      ))}
    </AccountListTemplateBlock>
  );
};

export default AccountListTemplate;
