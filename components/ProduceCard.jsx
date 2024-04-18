"use client";
import { faHeart, faLocation, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProduceCard = ({
  title,
  location,
  rating,
  distance,
  liked,
  borderBright,
}) => {
  const router = useRouter();
  return (
    <div
      className="flex  cursor-pointer items-center justify-between overflow-clip rounded-2xl bg-[#171717] shadow-xl shadow-[#050505]"
      onClick={() => router.push("/produce/display")}
    >
      <div className="h-full w-[25%] rounded-2xl bg-[#D9D9D9]"></div>
      <div className="flex h-full flex-1 flex-col gap-1 px-[3%] py-2 md:gap-2 lg:py-4 ">
        <div className="flex w-full items-center gap-1">
          <Typography
            variant="h2"
            className="font-montserrat text-base font-medium capitalize leading-none text-[#F4F5F7] md:text-lg"
          >
            {title}
          </Typography>
          <div className="">
            <Image
              width={12}
              height={14}
              src="/assets/icons/protectedIconAlt.svg"
              alt="✔"
              className="size-5 object-center md:gap-6"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-1">
          <Typography
            variant="h3"
            className="font-montserrat text-xs font-normal capitalize leading-none text-[#686D76]"
          >
            {location}
          </Typography>
          <IconButton className="!p-0">
            <FontAwesomeIcon
              aria-label="favorite"
              title={liked ? "favorited" : "favorite"}
              icon={faHeart}
              className={`text-base ${liked ? "text-[#FF5714]" : "text-[#D3DBE1]"} lg:text-lg`}
            />
          </IconButton>
        </div>
        <div className="flex w-full items-center gap-3 text-[#686D76]">
          <div className="flex size-fit items-center justify-center gap-1   text-white">
            <div className="!size-fit">
              <FontAwesomeIcon
                aria-label="rating"
                icon={faStar}
                className=" text-[#686D76]"
              />
            </div>
            <Typography className="font-montserrat text-xs font-bold text-[#686D76] ">
              {rating}
            </Typography>
          </div>
          <hr
            className={`h-full w-0 border ${borderBright ? "border-white" : "border-[#686D76]"}  "`}
          />
          <div className="flex size-fit items-center justify-center gap-1   text-white">
            <div className="!size-fit">
              <FontAwesomeIcon
                aria-label="distance"
                icon={faLocation}
                className=" text-[#686D76]"
              />
            </div>
            <Typography className="font-montserrat text-xs font-bold text-[#686D76] ">
              {distance}km
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduceCard;
