import { useCookies } from "react-cookie";
import { AvatarImg } from "../assets/images";
import { DotsIcon } from "../assets/icons";

const Logout = () => {
  const [cookies, , removeCookie] = useCookies(["token"]);

  function handleLogOut() {
    const isConfirm = confirm("Chiqib ketmoqchimisiz?");
    if (isConfirm) {
      removeCookie("token");
    }
  }

  return (
    <div
      onClick={handleLogOut}
      className="absolute right-0 bottom-[47px] w-full flex items-center gap-[10px]"
    >
      <img src={AvatarImg} alt="Avatar image" width={60} height={60} />
      <div>
        <strong>{cookies.token?.email || "User"}</strong>
        <p className="opacity-60">
          {cookies.token?.email || "user@example.com"}
        </p>
      </div>
      <button className="absolute top-0 bottom-0 my-auto right-[20px]">
        <DotsIcon />
      </button>
    </div>
  );
};

export default Logout;
