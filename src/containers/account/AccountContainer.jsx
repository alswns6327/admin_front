import React, { useEffect, useState } from "react";
import AccountFormTemplate from "../../components/account/AccountFormTemplate";
import AccountListTemplate from "../../components/account/AccountListTemplate";
import { useDispatch } from "react-redux";
import { getAdminList } from "../../lib/auth";

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

    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/.test(value);

    setAdminForm({ ...adminForm, [name]: value });
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
