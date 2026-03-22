import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
import { NewsItem } from "@/types/news";

export interface NewsCardProps {
  item: NewsItem;
}

function NewsCard({ item }: NewsCardProps) {
  return (
    <div className="border p-4 rounded-md shadow-md flex flex-col h-full">
      {/* Image */}
      <div className="relative rounded overflow-hidden md:h-56">
        <Link href={`/news/${item?._id}`}>
          <Image
            src={item?.imageUrl}
            priority
            width={500}
            height={500}
            alt="news Image"
            className="mb-5 w-full md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col grow">
        {/* Title (1 line clamp) */}
        <h2 className="text-xl font-semibold my-3 line-clamp-1">
          {item?.title}
        </h2>

        {/* Description (2line clamp) */}
        <p className="mb-4 line-clamp-2">{item?.description}</p>

        {/* Button always bottom */}
        <div className="mt-auto">
          <Link href={`/news/${item?._id}`}>
            <Button variant="default" className="cursor-pointer w-full">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
