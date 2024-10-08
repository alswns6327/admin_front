import React, { useEffect, useState } from "react";
import AccountListTemplate from "../../components/account/AccountListTemplate";
import { useDispatch } from "react-redux";
import { getAdminList, removeAdmin, saveAdmin } from "../../lib/api/auth";
import apiRequest from "../../lib/api/apiRequest";
import { useNavigate } from "react-router-dom";

const AccountContainer = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [adminList, setAdminList] = useState([]);
  const [newAdminId, setNewAdminId] = useState(0);

  useEffect(() => {
    const getAdmin = async () => {
      const response = await apiRequest(getAdminList, {}, null, navigator);
      setAdminList(response.data);
    };
    getAdmin();
  }, []);

  const handleRemoveAdmin = async (adminId) => {
    if (typeof adminId === "string") {
      setAdminList(adminList.filter((admin) => admin.id !== adminId));
      return;
    }
    const response = await apiRequest(removeAdmin, adminId, null, navigator);

    setAdminList(response.data);
  };

  const handleAdminAdd = () => {
    setAdminList([
      ...adminList,
      {
        id: "new_".concat(newAdminId),
        adminId: "",
        name: "",
        input: true,
      },
    ]);
    setNewAdminId(newAdminId + 1);
  };

  const handleAdminToggleInput = (adminId) => {
    setAdminList([
      ...adminList.map((admin) =>
        admin.id === adminId
          ? { ...admin, input: !admin.input }
          : { ...admin, input: false }
      ),
    ]);
  };

  const handleSaveAccount = async ([{ key: id, list: items }]) => {
    const [{ adminId }, { name }] = items;
    if (typeof id === "string") id = -1;
    //if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/.test("")) {

    if (!/^[A-Za-z0-9][^@#@!]{4,12}$/.test(adminId)) {
      return alert("영문, 숫자로만 된 4~12 자리의 아이디를 지정해주세요.");
    } else if (!/.{2,}/.test(name)) {
      return alert("2자 이상의 이름을 작성해주세요.");
    }
    const response = await apiRequest(
      saveAdmin,
      { id, adminId, name, password: "1111" },
      null,
      navigator
    );
    setAdminList(response.data);
  };

  return (
    <>
      <AccountListTemplate
        adminList={adminList}
        handleRemoveAdmin={handleRemoveAdmin}
        handleAdminAdd={handleAdminAdd}
        handleAdminToggleInput={handleAdminToggleInput}
        handleSaveAccount={handleSaveAccount}
      />
    </>
  );
};

export default AccountContainer;
