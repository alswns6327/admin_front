import React, { useEffect, useState } from "react";
import CodeListTemplate from "../../components/code/CodeListTemplate";
import apiRequest from "../../lib/api/apiRequest";
import {
  getCodeGroupList,
  getCodeList,
  removeCode,
  removeCodeGroup,
  saveCode,
  saveCodeGroup,
} from "../../lib/api/code";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CodeContainer = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [codeGroupList, setCodeGroupList] = useState([]);
  const [codeList, setCodeList] = useState([]);
  const [newCodeId, setNewCodeId] = useState(0);

  const [selectedCodeGroupId, setSelectedCodeGroupId] = useState(-1);

  useEffect(() => {
    const initCodeGroupList = async () => {
      const response = await apiRequest(getCodeGroupList, {}, null, navigator);
      const list = response.data;
      setCodeGroupList(list.map((item) => ({ ...item, input: false })));
    };
    initCodeGroupList();
  }, []);

  const handleSaveCodeGroup = async ([{ key: id, list: items }]) => {
    const [{ codeGroupName }] = items;
    if (typeof id === "string") id = -1;
    const codeGroup = {
      id,
      codeGroupName,
    };
    const response = await apiRequest(
      saveCodeGroup,
      codeGroup,
      null,
      navigator
    );
    const list = response.data;
    setCodeGroupList(list.map((item) => ({ ...item, input: false })));
  };
  const handleSaveCode = async ([{ key: id, list: items }]) => {
    const [{ codeName }, { code }] = items;
    if (typeof id === "string") id = -1;
    const codeObj = {
      id,
      codeName,
      code,
      codeGroupId: selectedCodeGroupId,
    };
    const response = await apiRequest(saveCode, codeObj, null, navigator);
    const list = response.data;
    setCodeList(list.map((item) => ({ ...item, input: false })));
  };
  const handleRemoveCodeGroup = async (codeGroupId) => {
    const response = await apiRequest(
      removeCodeGroup,
      codeGroupId,
      null,
      navigator
    );
    const list = response.data;
    setCodeGroupList(list.map((item) => ({ ...item, input: false })));
  };
  const handleRemoveCode = async (codeId) => {
    const response = await apiRequest(removeCode, codeId, null, navigator);
    const list = response.data;
    setCodeList(list.map((item) => ({ ...item, input: false })));
  };
  const handleClickCodeGroup = async (codeGroupId) => {
    if (typeof codeGroupId === "string") return;
    const response = await apiRequest(
      getCodeList,
      codeGroupId,
      null,
      navigator
    );
    const list = response.data;
    setCodeList(list.map((item) => ({ ...item, input: false })));
    setSelectedCodeGroupId(codeGroupId);
  };
  const handleAddCodeGroup = () => {
    setCodeGroupList([
      ...codeGroupList,
      { id: "new_".concat(newCodeId), codeGroupName: "", input: true },
    ]);
    setNewCodeId(newCodeId + 1);
  };
  const hanldeAddCode = () => {
    if (selectedCodeGroupId === -1) return alert("그룹 코드를 선택해주세요.");
    setCodeList([
      ...codeList,
      { id: "new_".concat(newCodeId), codeName: "", code: "", input: true },
    ]);
    setNewCodeId(newCodeId + 1);
  };
  const handleToggleCodeGroup = (codeGroupId) => {
    setCodeGroupList([
      ...codeGroupList.map((codeGroup) =>
        codeGroup.id === codeGroupId
          ? { ...codeGroup, input: !codeGroup.input }
          : { ...codeGroup, input: false }
      ),
    ]);
  };
  const handleToggleCode = (codeId) => {
    setCodeList([
      ...codeList.map((code) =>
        code.id === codeId
          ? { ...code, input: !code.input }
          : { ...code, input: false }
      ),
    ]);
  };
  return (
    <CodeListTemplate
      codeGroupList={codeGroupList}
      codeList={codeList}
      handleSaveCodeGroup={handleSaveCodeGroup}
      handleSaveCode={handleSaveCode}
      handleRemoveCodeGroup={handleRemoveCodeGroup}
      handleRemoveCode={handleRemoveCode}
      handleClickCodeGroup={handleClickCodeGroup}
      handleAddCodeGroup={handleAddCodeGroup}
      hanldeAddCode={hanldeAddCode}
      handleToggleCodeGroup={handleToggleCodeGroup}
      handleToggleCode={handleToggleCode}
    />
  );
};

export default CodeContainer;
