import Sidebar from "../src/components/Sidebar";
import Topbar from "../src/components/Topbar";
import HeroSection from "../src/components/HeroSection";
import InfoCard from "../src/components/InfoCard";
import CurrentDownloadSection from "../src/components/CurrentDownloadSection";
import AreaInstalledSection from "../src/components/AreaInstalledSection";
import FeaturedSection from "../src/components/FeaturedSection";

const IndexPage = () => {
  return (
    <div className="flex pt-4">
      <Sidebar />
      <div className="flex-1 px-11 bg-white ml-72">
        <Topbar />
        <div className="grid grid-cols-3 pt-6 auto-rows-max gap-6 h-screen">
          <HeroSection />
          <FeaturedSection />
          <InfoCard title="Total Active Users" />
          <InfoCard title="Total Installed" />
          <InfoCard title="Total Downloads" />
          <CurrentDownloadSection />
          <AreaInstalledSection />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
