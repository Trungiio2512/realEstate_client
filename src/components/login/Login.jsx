import { Button } from "@/components";
import { useAppStore } from "@/store/useAppStore";
import { TYPE_SIGN_LOGIN } from "@/utils/constants";
import { useState } from "react";
const Login = () => {
  const { typeSignLogin, setTypeSignLogin } = useAppStore();
  const handleChangeType = (type) => {
    if (typeSignLogin === type) {
      return;
    } else {
      setTypeSignLogin(type);
    }
  };
  return (
    <div className="bg-transparent flex items-center flex-col gap-3">
      <h1 className="capitalize text-xl font-medium text-main-500">welcome to realEstate</h1>
      <div className=" flex items-center gap-3">
        <Button
          type1={typeSignLogin === TYPE_SIGN_LOGIN.LOGIN}
          onHanldeClick={() => handleChangeType(TYPE_SIGN_LOGIN.LOGIN)}>
          Login
        </Button>
        <Button
          type1={typeSignLogin === TYPE_SIGN_LOGIN.SIGNIN}
          onHanldeClick={() => handleChangeType(TYPE_SIGN_LOGIN.SIGNIN)}>
          Create New Account
        </Button>
      </div>
    </div>
  );
};

export default Login;
