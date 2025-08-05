import { useState } from "react";
import {
  ChooseImgIcon,
  GifIcon,
  ModeIcon,
  SmileIcon,
  StatIcon,
  TimeIcon,
} from "../../assets/icons";
import { AvatarImg, KababImg } from "../../assets/images";
import { Heading, Input } from "../../components";
import { Button } from "../../components";
import PostItem from "../../components/PostItem";
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies] = useCookies(["token"]);
  const [chooseImg, setChooseImg] = useState(null);
  const [postList, setPostList] = useState(
    JSON.parse(localStorage.getItem("postList")) || [
      {
        id: 1,
        img: AvatarImg,
        username: "Designsta",
        email: "@inner · 25m",
        content:
          "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
        commentCount: 10,
        repostCount: 1,
        likeCount: 8,
        uploadCount: 0,
        statisticCount: 0,
        postImg: null,
      },
      {
        id: 2,
        img: AvatarImg,
        username: "cloutexhibition",
        email: "@RajLahoti · 22m",
        content:
          "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
        commentCount: 0,
        repostCount: 5,
        likeCount: 9,
        uploadCount: 0,
        statisticCount: 0,
        postImg: null,
      },
      {
        id: 3,
        img: AvatarImg,
        username: "CreativePhoto",
        email: "@cloutexhibition · 1h",
        content: "Обетда..... Кечиринглар",
        commentCount: 10,
        repostCount: 1,
        likeCount: 8,
        uploadCount: 0,
        statisticCount: 0,
        postImg: KababImg,
      },
    ]
  );

  function handleCreatePost(e) {
    e.preventDefault();

    // Check if the todo field exists and has a value
    const todoElement = e.target.todo;
    if (!todoElement || !todoElement.value.trim()) {
      alert("Please enter some content for your tweet!");
      return;
    }

    const data = {
      id: postList[postList.length - 1].id
        ? postList[postList.length - 1].id + 1
        : 1,
      img: AvatarImg,
      username: cookies.token?.email || "User",
      email: cookies.token?.email || "user@example.com",
      content: todoElement.value,
      commentCount: 0,
      repostCount: 0,
      likeCount: 0,
      uploadCount: 0,
      statisticCount: 0,
      postImg: chooseImg,
    };
    setPostList([data, ...postList]);
    setChooseImg(null);
    e.target.reset();
  }
  localStorage.setItem("postList", JSON.stringify(postList));
  return (
    <div>
      <div className="flex items-center justify-between p-5 border-b-[1px] border-[#D8D8D8]">
        <Heading type={"h2"} title={"Home"} />
        <ModeIcon />
      </div>
      <div className="flex relative items-start gap-[15px] p-5 border-b-[1px] border-[#D8D8D8]">
        <img
          className="w-[60px] h-[60px]"
          src={AvatarImg}
          alt="Avatar img"
          width={60}
          height={60}
        />
        <form onSubmit={handleCreatePost} className="w-[80%] pb-[28px]">
          <Input
            classList={`!border-none !mb-[32px] !outline-none !p-0 !pt-[11px] font-semibold text-[22px]`}
            name={"todo"}
            placeholder={"What's happening"}
          />
          <div className="flex items-center gap-[22px]">
            <label>
              <ChooseImgIcon />
              <input
                onChange={(e) =>
                  setChooseImg(URL.createObjectURL(e.target.files[0]))
                }
                className="hidden"
                type="file"
              />
            </label>
            <button type="button">
              <GifIcon />
            </button>
            <button type="button">
              <StatIcon />
            </button>
            <button type="button">
              <SmileIcon />
            </button>
            <button type="button">
              <TimeIcon />
            </button>
          </div>
          <Button
            type={"submit"}
            classList={"!w-[108px] !absolute !bottom-[5px] !right-[18px]"}
          >
            Tweet
          </Button>
        </form>
      </div>
      <div>
        {postList.map((item) => (
          <PostItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
