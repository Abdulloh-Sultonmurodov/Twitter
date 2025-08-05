import { useState } from "react";
import { Loading, TwitterIcon } from "../../assets/images";
import { Button, Heading, Input, Text as AppText } from "../../components";
import { useCookies } from "react-cookie";

const Login = () => {
  const [_cookies, setCookies] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    setTimeout(() => {
      setCookies("token", data);
    }, 1000);
  }

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
          <form onSubmit={handleLogin}>
            <div className="space-y-[25px] mb-[25px]">
              <Input
                id="login-username"
                type="text"
                placeholder="Phone number, email address"
                name="email"
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
            <Button>
              {loading ? (
                <img
                  className="mx-auto scale-[2]"
                  src={Loading}
                  alt="Loading..."
                  width={25}
                  height={25}
                />
              ) : (
                "Log In"
              )}
            </Button>
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
