import React from "react";
import { Button } from "../button";
import Image from "next/image";
import banner from "@/public/network-connection-graphic-overlay-background-computer-screen.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-slate-100">
      <div className="p-4 py-8 lg:px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* images */}
        <div>
          <Image
            src={banner}
            alt="Banner-Image-for news-portal"
            className="w-full"
          />
        </div>

        {/* content */}
        <div className="space-y-4 flex flex-col">
          <h1 className="text-4xl font-bold mb-4 dark:text-black">
            Stay Updated with the Latest News
          </h1>
          <p className="text-gray-600 max-w-xl">
            Get real-time updates, breaking headlines, and in-depth coverage
            from around the world—all in one place. Stay informed with accurate
            reporting, trending stories, and expert insights that matter to you,
            every single day.
          </p>
          <Link href="/news">
            <Button
              variant="default"
              className="cursor-pointer w-[90] dark:bg-gray-900 dark:text-white"
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
