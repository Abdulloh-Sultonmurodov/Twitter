import { TwitterIcon } from "../assets/images";

const PageLoading = () => {
  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center items-center loading-img">
      <img src={TwitterIcon} alt="Logo Loading" width={100} height={100} />
    </div>
  );
};

export default PageLoading;
