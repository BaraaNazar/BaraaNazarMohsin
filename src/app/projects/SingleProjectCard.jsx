import React from "react";
import Image from "next/image";
import Link from "next/link";

function SingleProjectCard(props) {
  return (
    <div className="my-8 rounded shadow-md shadow-gray-900  bg-gray-800 duration-300 hover:-translate-y-1">
      <div className="max-w-sm rounded overflow-hidden shadow-2xl justify-center items-center flex flex-col">
        <Image
          className="rounded-t rounded-b-none h-fit w-fit"
          width="500"
          height="500"
          src={props.image}
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="text-lg mb-4 font-bold leading-relaxed text-gray-300">
            {props.name}
          </div>
          <p className="leading-5 text-gray-400 lg:h-48 h-full w-fit text-sm">
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
