import React, { useEffect, useState } from "react";
import AccountFormTemplate from "../../components/account/AccountFormTemplate";
import AccountListTemplate from "../../components/account/AccountListTemplate";
import { useDispatch } from "react-redux";
import { getAdminList, saveAdmin } from "../../lib/auth";

const AccountContainer = () => {
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    const asyncGetAdminList = async () => {
      const response = await getAdminList();
      setAdminList(response.data);
    };
    if (!adminList.length) {
      asyncGetAdminList();
    }
  }, [adminList]);

  const [adminForm, setAdminForm] = useState({
    adminId: "",
    password: "",
    name: "",
  });

  const onAdminFormChange = (e) => {
    const { name, value } = e.target;
    setAdminForm({ ...adminForm, [name]: value });
  };

  const onSaveAccount = async () => {
    if (
      !/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/.test(
        adminForm.password
      )
    ) {
      alert(
        "영문, 숫자, 특수문자를 포함한 8~15 자리의 패스워드를 설정해주세요."
      );
    } else if (!/^[A-Za-z0-9][^@#@!]{4,12}$/.test(adminForm.adminId)) {
      alert("영문, 숫자로만 된 4~12 자리의 아이디를 지정해주세요.");
    } else if (!/.{2,}/.test(adminForm.adminId)) {
      alert("2자 이상의 이름을 작성해주세요.");
    }

    const response = await saveAdmin(adminForm);
    console.log(response);
  };

  return (
    <>
      <AccountListTemplate adminList={adminList} />
      <AccountFormTemplate
        onAdminFormChange={onAdminFormChange}
        adminForm={adminForm}
      />
    </>
  );
};

export default AccountContainer;
