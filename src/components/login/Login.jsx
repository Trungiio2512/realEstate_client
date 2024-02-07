import { loginApi, registerApi } from "@/apis/auth";
import { Button, InputForm } from "@/components";
import { useAppStore } from "@/store/useAppStore";
import { TYPE_SIGN_LOGIN } from "@/utils/constants";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  const { typeSignLogin, setTypeSignLogin } = useAppStore();
  const handleChangeType = (type) => {
    if (typeSignLogin === type) {
      return;
    } else {
      setTypeSignLogin(type);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    if (typeSignLogin === TYPE_SIGN_LOGIN.LOGIN) {
      const res = await loginApi(data);
      console.log(res);
    }
    if (typeSignLogin === TYPE_SIGN_LOGIN.REGISTER) {
      // const res = await registerApi(data);
      // console.log(res);
    }
  };

  console.log(typeSignLogin);

  useEffect(() => {
    // reset();
    //!reset value
  }, [typeSignLogin]);
  password.current = watch("password", "");
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

        {typeSignLogin === TYPE_SIGN_LOGIN.REGISTER && (
          <>
            <InputForm
              register={register}
              id="confirmPassword"
              label="Confirm password"
              placeholder="Plese confirm your password "
              type="password"
              validate={(value) => value !== password.current && "The passwords do not match"}
              error={errors?.confirmPassword?.message}
            />
            <InputForm
              options={[
                { id: 1, label: "User", value: "user", role: "role" },
                { id: 2, label: "Agent", value: "agent", role: "role" },
              ]}
              type="radio"
              style="form-radio"
              id="role"
              register={register}
              validate={{ required: "Role must be checked" }}
              error={errors?.role?.message}
            />
          </>
        )}
      </div>

      <div className="w-full">
        <Button className="w-full" type1 onHanldeClick={handleSubmit(onSubmit)}>
          {typeSignLogin === TYPE_SIGN_LOGIN.LOGIN ? "Sign in" : "Register"}
        </Button>

        <p className="mt-5 text-main-500 text-sm  text-center cursor-pointer">
          Forgot your password
        </p>
      </div>
    </div>
  );
};

export default Login;
