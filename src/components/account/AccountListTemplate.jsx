import styled from "styled-components";
import Table from "../common/Table";
import { useEffect, useState } from "react";

const AccountListTemplateBlock = styled.div``;

const AccountListTemplate = ({
  adminList,
  handleRemoveAdmin,
  handleAdminAdd,
  handleAdminToggleInput,
  handleSaveAccount,
}) => {
  const lists = adminList.map((admin) => ({
    key: admin.id,
    items: [
      { name: "adminId", value: admin.adminId },
      { name: "name", value: admin.name },
    ],
    input: admin.input,
  }));

  const [inputList, setInputList] = useState(
    lists.map((list) => ({
      key: list.key,
      list: list.items.map((item, j) => ({ [item.name]: item.value })),
    }))
  );

  const handleAdminFieldChange = ({ name, value }, key) => {
    setInputList([
      ...inputList.map((input) =>
        input.key === key
          ? {
              key: input.key,
              list: input.list.map((item) => ({ ...item, [name]: value })),
            }
          : input
      ),
    ]);
  };

  useEffect(() => {
    setInputList(
      lists.map((list) => ({
        key: list.key,
        list: list.items.map((item, j) => ({ [item.name]: item.value })),
      }))
    );
  }, [adminList]);

  return (
    <AccountListTemplateBlock>
      <Table
        lists={lists}
        inputList={inputList}
        handleAdd={handleAdminAdd}
        handleSave={handleSaveAccount}
        handleRemoveItem={handleRemoveAdmin}
        handleToggle={handleAdminToggleInput}
        handleChangeField={handleAdminFieldChange}
        headerList={["아이디", "이름", "수정", "삭제"]}
        headerTitle={"계정 목록"}
      />
    </AccountListTemplateBlock>
  );
};

export default AccountListTemplate;
