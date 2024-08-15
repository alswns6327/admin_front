import styled from "styled-components";
import Table from "../common/Table";
import { useEffect, useState } from "react";

const CodeListTemplateBlock = styled.div``;

const CodeListTemplate = ({
  codeGroupList,
  codeList,
  handleSaveCodeGroup,
  handleSaveCode,
  handleRemoveCodeGroup,
  handleRemoveCode,
  handleClickCodeGroup,
  handleAddCodeGroup,
  hanldeAddCode,
  handleToggleCodeGroup,
  handleToggleCode,
}) => {
  const groupLists = codeGroupList.map((codeGroup) => ({
    key: codeGroup.id,
    items: [{ name: "codeGroupName", value: codeGroup.codeGroupName }],
    input: codeGroup.input,
  }));

  const codeLists = codeList.map((code) => ({
    key: code.id,
    items: [
      { name: "codeName", value: code.codeName },
      { name: "code", value: code.code },
    ],
    input: code.input,
  }));

  const [groupInputList, setGroupInputList] = useState(
    groupLists.map((list) => ({
      key: list.key,
      list: list.items.map((item, j) => ({ [item.name]: item.value })),
    }))
  );

  const [codeInputList, setCodeInputList] = useState(
    codeLists.map((list) => ({
      key: list.key,
      list: list.items.map((item, j) => ({ [item.name]: item.value })),
    }))
  );

  const handleCodeGroupFiledChange = ({ name, value }, key) => {
    setGroupInputList([
      ...groupInputList.map((input) =>
        input.key === key
          ? {
              key: input.key,
              list: input.list.map((item) => ({ ...item, [name]: value })),
            }
          : input
      ),
    ]);
  };

  const handleCodeFiledChange = ({ name, value }, key) => {
    setCodeInputList([
      ...codeInputList.map((input) =>
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
    setGroupInputList(
      groupLists.map((list) => ({
        key: list.key,
        list: list.items.map((item, j) => ({ [item.name]: item.value })),
      }))
    );
  }, [codeGroupList]);

  useEffect(() => {
    setCodeInputList(
      codeLists.map((list) => ({
        key: list.key,
        list: list.items.map((item, j) => ({ [item.name]: item.value })),
      }))
    );
  }, [codeList]);

  return (
    <CodeListTemplateBlock>
      <Table
        lists={groupLists}
        inputList={groupInputList}
        listItemClick={handleClickCodeGroup}
        handleAdd={handleAddCodeGroup}
        handleSave={handleSaveCodeGroup}
        handleRemoveItem={handleRemoveCodeGroup}
        handleToggle={handleToggleCodeGroup}
        handleChangeField={handleCodeGroupFiledChange}
        headerList={["코드 그룹명", "저장", "삭제"]}
        headerTitle={"코드 그룹"}
      />
      <Table
        lists={codeLists}
        inputList={codeInputList}
        handleAdd={hanldeAddCode}
        handleSave={handleSaveCode}
        handleRemoveItem={handleRemoveCode}
        handleToggle={handleToggleCode}
        handleChangeField={handleCodeFiledChange}
        headerList={["코드명", "코드", "저장", "삭제"]}
        headerTitle={"코드"}
      />
    </CodeListTemplateBlock>
  );
};

export default CodeListTemplate;
