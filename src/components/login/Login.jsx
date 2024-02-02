import { Button, InputForm } from "@/components";
import { useAppStore } from "@/store/useAppStore";
import { TYPE_SIGN_LOGIN } from "@/utils/constants";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { typeSignLogin, setTypeSignLogin } = useAppStore();
  const handleChangeType = (type) => {
    if (typeSignLogin === type) {
      return;
    } else {
      setTypeSignLogin(type);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(typeSignLogin);

  useEffect(() => {
    // reset();
    //!reset value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeSignLogin]);

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
          type1={typeSignLogin === TYPE_SIGN_LOGIN.SIGNIN}
          onHanldeClick={() => handleChangeType(TYPE_SIGN_LOGIN.SIGNIN)}>
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
          validate={{ required: "You must enter phone number" }}
          error={errors?.phone?.message}
        />
        <InputForm
          register={register}
          id="password"
          label="Password"
          placeholder="Plese enter your password "
          type="password"
          validate={{ required: "You must enter your password" }}
          error={errors?.password?.message}
        />
        {typeSignLogin === TYPE_SIGN_LOGIN.SIGNIN && (
          <InputForm
            register={register}
            id="fullname"
            label="Your fullname"
            placeholder="Plese enter your fullname "
            type="text"
            validate={{ required: "You must enter your fullname" }}
            error={errors?.fullname?.message}
          />
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
