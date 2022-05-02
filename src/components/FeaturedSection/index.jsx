import Image from "next/image";
import ZombiesImage from "../../../public/zombies.jpg";

const FeaturedSection = () => {
  return (
    <div className="shadow-lg rounded-2xl row-span-2 relative overflow-hidden">
      <Image
        src={ZombiesImage}
        alt="Zombies App"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute t-0 l-0 bg-black bg-opacity-60 w-full h-full"></div>
      <div className="flex flex-col p-6 justify-end h-full">
        <h3 className="z-10 font-bold text-xs uppercase text-white opacity-50">
          Featured App
        </h3>
        <h2 className="z-10 text-lg text-white font-bold capitalize my-2">
          Disney Zombies 2
        </h2>
        <h4 className="z-10 opacity-90 text-white">
          Believing These 7 Myths about Event Keeps...
        </h4>
      </div>
    </div>
  );
};

export default FeaturedSection;
