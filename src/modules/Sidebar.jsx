import { DotsIcon, SearchIcon, SettingsIcon } from "../assets/icons";
import { Input } from "../components";
import { Users1, Users2 } from "../assets/images";
import { Button } from "../components";

const Sidebar = () => {
  return (
    <div className="w-[402px] pl-[28px]">
      <div className="py-5">
        <label className="flex w-[373px] h-[55px] items-center gap-2 rounded-[31px] bg-[#EFF3F4] py-[16px] pl-[20px]">
          <SearchIcon />
          <Input
            classList={"!border-none !outline-none"}
            type={"text"}
            placeholder={"Search Twitter"}
          />
        </label>
      </div>
      <div className="w-[373px] bg-[#F7F9F9] rounded-[10px] px-[16px] pt-[20px] pb-[30px]">
        <div className="flex items-center justify-between">
          <strong className="font-bold text-[24px]">Trends for you</strong>
          <SettingsIcon />
        </div>
        <div className="flex items-center justify-between mt-[20px]">
          <div>
            <p className="text-[16px] text-[#393B41] opacity-60">
              Trending in Germany
            </p>
            <strong className="font-semibold text-[20px]">Revolution</strong>
            <p className="text-[16px] text-[#393B41] opacity-60">
              50.4K Tweets
            </p>
          </div>
          <div>
            <DotsIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-[20px]">
          <div>
            <p className="text-[16px] text-[#393B41] opacity-60">
              Trending in Germany
            </p>
            <strong className="font-semibold text-[20px]">Revolution</strong>
            <p className="text-[16px] text-[#393B41] opacity-60">
              50.4K Tweets
            </p>
          </div>
          <div>
            <DotsIcon />
          </div>
        </div>
        <div className="flex items-center justify-between mt-[20px]">
          <div>
            <p className="text-[16px] text-[#393B41] opacity-60">
              Trending in Germany
            </p>
            <strong className="font-semibold text-[20px]">Revolution</strong>
            <p className="text-[16px] text-[#393B41] opacity-60">
              50.4K Tweets
            </p>
          </div>
          <div>
            <DotsIcon />
          </div>
        </div>
        <p className="pt-[30px] text-[18px] text-[#1DA1F2]">Show more</p>
      </div>
      <div className="px-[15px] py-[22px] mt-[20px] bg-[#F7F9F9] rounded-[10px]">
        <strong>You might like</strong>
        <div className="mt-[25px] flex items-center justify-between">
          <div className="flex items-center gap-[13px]">
            <img src={Users1} alt="Users image" width={60} height={60} />
            <div>
              <strong>Mushtariy</strong>
              <p>@Mushtar565266</p>
            </div>
          </div>
          <Button classList={"bg-black !w-[92px] !h-[38px]"}>Follow</Button>
        </div>
        <div className="mt-[25px] flex items-center justify-between">
          <div className="flex items-center gap-[13px]">
            <img src={Users2} alt="Users image" width={60} height={60} />
            <div>
              <strong>Shuhratbek</strong>
              <p>@mrshukhrat</p>
            </div>
          </div>
          <Button classList={"bg-black !w-[92px] !h-[38px]"}>Follow</Button>
        </div>
        <p className="pt-[30px] text-[18px] text-[#1DA1F2]">Show more</p>
      </div>
      <div className="flex items-center gap-[15px] mt-[30px]">
        <p className="text-[16px] text-[#536471]">Terms of Service</p>
        <p className="text-[16px] text-[#536471]">Privacy Policy</p>
        <p className="text-[16px] text-[#536471]">Cookie Policy</p>
      </div>
      <div className="flex items-center gap-[15px] mt-[10px]">
        <p className="text-[16px] text-[#536471]">Imprint</p>
        <p className="text-[16px] text-[#536471]">Ads Info</p>
        <p className="text-[16px] text-[#536471]">More ···</p>
        <p className="text-[16px] text-[#536471]">© 2021 Twitter, Inc.</p>
      </div>
    </div>
  );
};

export default Sidebar;
