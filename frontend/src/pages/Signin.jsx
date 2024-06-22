import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { DudejaLogo } from "../components/DudejaLogo";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  return (
    <div className="bg-black h-screen flex">
      <div className="flex w-2/3 items-center">
        <div className="rounded-lg bg-white p-2 px-4 w-full">
            <Heading label={"Sign in"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <InputBox label={"Email"} />
            <InputBox label={"Password"} />
            <div className="pt-4">
                <Button label={"Sign in"} />
            </div>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
      <div className="flex items-center w-1/3">
       <DudejaLogo />
      </div>
    </div>
  );
};
