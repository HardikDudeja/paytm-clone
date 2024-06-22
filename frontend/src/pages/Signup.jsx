import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"


export const Signup = () => {
    return <div className="bg-black h-screen flex">
    <div className="flex w-2/3 items-center">
      <div className="rounded-lg bg-white p-2 px-4 w-full">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox label={"First Name"} />
        <InputBox label={"Last Name"} />
        <InputBox label={"Email"} />
        <InputBox label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
    <div className="flex items-center w-1/3">
        <img className="px-8 hover:px-4 transition-all duration-300" src="/dudeja-high-resolution-logo-white-transparent.png" alt="Name logo" />
        <h1 >Image here</h1>
    </div>
  </div>
}