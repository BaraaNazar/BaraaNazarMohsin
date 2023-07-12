import React from "react";
import Image from "next/image";
import refubook from "public/images/RefuBook.png";
import movieProject from "public/images/movie-project.png";
import crossRoadRestaurant from "public/images/Cross-Road-Restaurant.png";
import madLibs from "public/images/Mad-libs.png";
import talebAlelm from "public/images/talebalelm.png";
import TodoImg from "../../../public/images/todoListImg.png";
import ExpenseCalculator from "public/images/screencapture-expeses-calculator-vercel-app-2023-07-10-15_03_19.png";

const Gallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 hidden">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={talebAlelm}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={madLibs}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={movieProject}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={refubook}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={crossRoadRestaurant}
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={TodoImg}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={ExpenseCalculator}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
