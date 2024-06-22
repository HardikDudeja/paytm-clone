import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { DudejaLogo } from "../components/DudejaLogo";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-black h-screen flex">
      <div className="flex w-2/3 items-center">
        <div className="rounded-lg bg-white p-2 px-4 w-full">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox onChange = {(e) => setFirstName(e.target.value)} label={"First Name"} />
          <InputBox onChange = {(e) => setLastName(e.target.value)} label={"Last Name"} />
          <InputBox onChange = {(e) => setUserName(e.target.value)} label={"Email"} />
          <InputBox onChange = {(e) => setPassword(e.target.value)} label={"Password"} />
          <div className="pt-4">
            <Button onClick={() => axios.post("http://localhost:3000/api/v1/user/signup",
              {
                userName,
                password, 
                firstName, 
                lastName
              }
            ).then((response) => console.log("response", response)).catch((e) => console.log("error", e))} label={"Sign up"} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
      <div className="flex items-center w-1/3">
       <DudejaLogo />
      </div>
    </div>
  );
};
