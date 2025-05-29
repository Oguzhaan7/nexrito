import SearchBar from "@/components/main/Search";
import Wallpaper from "@/components/main/Wallpaper";
import ChampionTierTabs from "@/components/champion/ChampionTierTabs";

const Home = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-center items-start w-full overflow-x-hidden">
        <Wallpaper />
        <SearchBar />
      </div>
      <ChampionTierTabs />
    </div>
  );
};

export default Home;
