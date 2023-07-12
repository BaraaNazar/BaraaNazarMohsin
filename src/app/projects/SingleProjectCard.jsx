import React from "react";
import Image from "next/image";
import Link from "next/link";

function SingleProjectCard(props) {
  return (
    <div className="my-8 rounded  duration-300 hover:-translate-y-1">
      <div className="max-w-sm rounded overflow-hidden shadow-2xl justify-center items-center flex flex-col">
        <Image
          className="rounded-t rounded-b-none lg:h-52 h-auto w-full"
          width="500"
          height="500"
          src={props.image}
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="text-lg mb-4 font-bold leading-relaxed text-white">
            {props.name}
          </div>
          <p className="leading-5 text-white lg:h-48 text-sm">
            {props.content}
          </p>
        </div>

        <div className="px-6 pt-4 pb-2 flex">
          <Link
            className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out"
            href={props.demo}
            target="_blank"
          >
            Demo
          </Link>
          <Link
            className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-red-600 transition delay-50 duration-300 ease-in-out"
            href={props.code}
            target="_blank"
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleProjectCard;
