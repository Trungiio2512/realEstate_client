import { loginApi, registerApi } from "@/apis/auth";
import { Button, InputForm } from "@/components";
import toastMes from "@/config/toastify";
import { useAppStore } from "@/store/useAppStore";
import { TYPE_SIGN_LOGIN } from "@/utils/constants";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const { isOpen, setOpen } = useAppStore();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const {
    register: register_1,
    handleSubmit: handleSubmit_1,
    reset: reset_1,
    watch: watch_1,
    formState: { errors: errors_1 },
  } = useForm({ mode: "onChange" });

  const { typeSignLogin, setTypeSignLogin } = useAppStore();

  const handleChangeType = (type) => {
    if (typeSignLogin === type) {
      return;
    } else {
      setTypeSignLogin(type);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (typeSignLogin !== TYPE_SIGN_LOGIN.LOGIN) {
        return;
      }
      const res = await loginApi(data);
      if (res?.status === 200 || Object.keys(res?.metadata).length > 0) {
        toastMes("success", "Login successful");
      }
      reset({ phone: "", password: "" });
      setOpen(!isOpen);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitRegister = async (data) => {
    setLoading(true);
    try {
      if (typeSignLogin !== TYPE_SIGN_LOGIN.REGISTER) {
        return;
      }
      const res = await registerApi(data);
      if (res?.status === 201 || Object.keys(res?.metadata).length > 0) {
        toastMes("success", "Register successful");
      }
      reset_1({ phone: "", password: "", confirmPassword: "" });
      setOpen(!isOpen);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-transparent flex items-center flex-col gap-5">
      <h1 className="capitalize text-xl font-medium text-main-500 w-full text-center">
        welcome to realEstate
      </h1>
      <div className=" flex items-center gap-3 w-full ">
        <Button
          type1={typeSignLogin === TYPE_SIGN_LOGIN.LOGIN}
          onHanldeClick={() => handleChangeType(TYPE_SIGN_LOGIN.LOGIN)}>
          Login
        </Button>
        <Button
          type1={typeSignLogin === TYPE_SIGN_LOGIN.REGISTER}
          onHanldeClick={() => handleChangeType(TYPE_SIGN_LOGIN.REGISTER)}>
          Create New Account
        </Button>
      </div>
      <div className="flex flex-col gap-2 w-full ">
        {typeSignLogin === TYPE_SIGN_LOGIN.LOGIN && (
          <>
            <InputForm
              register={register}
              id="phone"
              label="Phone number"
              placeholder="Plese enter your phone number "
              type="text"
              validate={{
                required: "You must enter phone number",
                pattern: {
                  value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                  message: "Your phone number is not correct",
                },
              }}
              error={errors?.phone?.message}
            />
            <InputForm
              register={register}
              id="password"
              label="Password"
              placeholder="Plese enter your password "
              type="password"
              validate={{ required: "Please enter your password" }}
              error={errors?.password?.message}
            />
          </>
        )}

        {typeSignLogin === TYPE_SIGN_LOGIN.REGISTER && (
          <>
            <InputForm
              register={register_1}
              id="phone"
              label="Phone number"
              placeholder="Plese enter your phone number "
              type="text"
              validate={{
                required: "You must enter phone number",
                pattern: {
                  value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                  message: "Your phone number is not correct",
                },
              }}
              error={errors_1?.phone?.message}
            />
            <InputForm
              register={register_1}
              id="password"
              label="Password"
              placeholder="Plese enter your password "
              type="password"
              validate={{ required: "Please enter your password" }}
              error={errors_1?.password?.message}
            />
            <InputForm
              register={register_1}
              id="confirmPassword"
              label="Confirm password"
              placeholder="Plese confirm your password "
              type="password"
              validate={{
                required: true,
                validate: (val) => {
                  if (watch_1("password") != val || val.trim() === "") {
                    return "Your passwords do no match";
                  }
                },
              }}
              error={errors_1?.confirmPassword?.message}
            />
            <InputForm
              options={[
                { id: 1, label: "User", value: "user", role: "role" },
                { id: 2, label: "Agent", value: "agent", role: "role" },
              ]}
              type="radio"
              style="form-radio"
              id="role"
              register={register_1}
              validate={{ required: "Please enter your position" }}
              error={errors_1?.role?.message}
            />
          </>
        )}
      </div>

      <div className="w-full">
        {typeSignLogin === TYPE_SIGN_LOGIN.LOGIN && (
          <Button className="w-full" loading={loading} type1 onHanldeClick={handleSubmit(onSubmit)}>
            Sign in
          </Button>
        )}
        {typeSignLogin === TYPE_SIGN_LOGIN.REGISTER && (
          <Button
            className="w-full"
            loading={loading}
            type1
            onHanldeClick={handleSubmit_1(onSubmitRegister)}>
            Create new account
          </Button>
        )}
        <p className="mt-5 text-main-500 text-sm  text-center cursor-pointer">
          Forgot your password
        </p>
      </div>
    </div>
  );
};

export default Login;
