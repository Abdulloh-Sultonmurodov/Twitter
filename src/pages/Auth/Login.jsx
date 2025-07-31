import { TwitterIcon } from "../../assets/images";
import { Button, Heading, Input, Text as AppText } from "../../components";

const users = [{ username: "abdulloh", password: "123" }];

const Login = () => {
  return (
    <>
      <div className="flex justify-center mt-[60px] w-[450px] mx-auto">
        <div>
          <img
            className="mb-[36px]"
            src={TwitterIcon}
            alt="Twitter Icon"
            width={50}
            height={41}
          />
          <Heading
            classList={"mb-[36px]"}
            type={"h1"}
            title={"Log in to Twitter"}
          />
          <form>
            <div className="space-y-[25px] mb-[25px]">
              <Input
                id="login-username"
                type="text"
                placeholder="Phone number, email address"
                name="username"
                required
                autoComplete="off"
              />
              <Input
                id="login-password"
                type="password"
                placeholder="Password"
                name="password"
                required
                autoComplete="off"
              />
            </div>
            <Button title="Log In" type="submit" />
          </form>
          <div className="flex justify-between mt-[40px]">
            <a className="text-[#1DA1F2]" href="/">
              <AppText title="Forgot password?" />
            </a>
            <a className="text-[#1DA1F2]" href="/">
              <AppText title="Sign up to Twitter" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
