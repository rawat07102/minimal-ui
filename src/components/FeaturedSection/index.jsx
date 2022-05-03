import React from "react"
import FeaturedCard from "./FeaturedCard";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";

const FeaturedSection = () => {
  const [index, setIndex] = React.useState(0)

  const slideRight = () => {
    if (index < 1 ) return
    setIndex(x => x - 1)
  }

  const slideLeft = () => {
    if (index > 2) return
    setIndex(x => x + 1)
  }

  return (
    <div className="shadow-lg rounded-2xl row-span-2 overflow-hidden flex h-80 relative">
      <div className="absolute z-50 h-9 text-white right-0 top-4">
        <button className="opacity-50 px-1 hover:opacity-100" onClick={slideRight}>
          <ArrowLeftRoundedIcon className="h-9 w-10" />
        </button>
        <button className="opacity-50 px-1 hover:opacity-100" onClick={slideLeft}>
          <ArrowRightRoundedIcon className="h-9 w-10" />
        </button>
      </div>
      <div className={`w-full h-full flex transition-transform ease-in-out duration-500`} style={{
        transform: `translateX(-${100 * index}%)`
      }}>
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default FeaturedSection;
