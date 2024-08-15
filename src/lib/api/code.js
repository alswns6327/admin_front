import { createRequest } from "./apiClient";

export const getCodeGroupList = () => createRequest("get", "/code/group");

export const getCodeList = (codeGroupId) =>
  createRequest("get", "/code/".concat(codeGroupId));

export const saveCodeGroup = (codeGroup) =>
  createRequest("post", "/code/group", codeGroup);

export const saveCode = (code) => createRequest("post", "/code", code);

export const removeCodeGroup = (codeGroupId) =>
  createRequest("delete", "/code/group/".concat(codeGroupId));

export const removeCode = (codeId) =>
  createRequest("delete", "/code/".concat(codeId));
