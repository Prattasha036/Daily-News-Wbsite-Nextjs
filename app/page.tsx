import Banner from "@/components/ui/shared/Banner";
import NewsCard from "@/components/ui/shared/NewsCard";
import { NewsItem } from "./../types/news";
import NewsLetter from "@/components/ui/shared/NewsLetter";

const Home = async () => {
  const data = await fetch(
    "https://news-portal-api-data.onrender.com/api/news",
    {
      cache: "no-store", // change this
    },
  );

  const news = await data.json();

  return (
    <div className="py-12">
      <Banner />

      {/* latest news */}
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news?.slice(0, 6).map((item: NewsItem) => (
            <NewsCard key={item?._id} item={item} />
          ))}
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default Home;
