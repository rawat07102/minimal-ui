import Image from "next/image";
import HeroImg from "../../../public/download.png";

const HeroSection = () => {
  return (
    <div className="flex col-span-2 shadow-lg row-span-2 p-10 py-10 bg-green-200 bg-opacity-90 rounded-2xl">
      <div className="flex flex-col flex-1 items-start justify-between">
        <h1 className="text-2xl font-bold opacity-80">
          Welcome Back,
          <br className="mt-2" />
          Minimal UI!
        </h1>
        <h2 className="opacity-90">
          Lorem veniet, molestiae aliquam suscipit sit, amet praesentium veniam
          animi ipsam.
        </h2>
        <button className="font-bold shadow-[rgb(0,171,85,0.24)_0px_8px_16px_0px] text-white bg-green-600 bg-opacity-90 p-2 px-4 rounded-md mt-4 hover:bg-green-700">
          Go Now
        </button>
      </div>
      <div className="flex w-64 relative">
        <Image src="/hero.svg" layout="fixed" height="200" width="250" />
        <div className="absolute right-0">
          <Image src={HeroImg} layout="fixed" height="177" width="75" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
