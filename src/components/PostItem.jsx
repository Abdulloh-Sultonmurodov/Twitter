import {
  CommentIcon,
  LikeIcon,
  RepostIcon,
  StatisticIcon,
  UploadIcon,
} from "../assets/icons";

const PostItem = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex gap-[15px] p-5 border-b-[1px] border-[#D8D8D8]"
    >
      <img
        className="w-[60px] h-[60px]"
        src={item.img}
        alt="User image"
        width={60}
        height={60}
      />
      <div className="w-full">
        <div className="flex gap-[5px] items-center mb-[5px]">
          <strong>{item.username}</strong>
          <p>{item.email}</p>
        </div>
        <p className="mb-[15px] text-[18px]">{item.content}</p>
        {item.postImg && (
          <img
            className="w-full h-[453px] rounded-[20px]"
            src={item.postImg}
            alt="Post image"
          />
        )}
        <div className="flex mt-[22px] !w-[100%] items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <CommentIcon />
            <span>{item.commentCount}</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <RepostIcon />
            <span>{item.repostCount}</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <LikeIcon />
            <span>{item.likeCount}</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <UploadIcon />
            <span>{item.uploadCount}</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <StatisticIcon />
            <span>{item.statisticCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
