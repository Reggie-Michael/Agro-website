import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const DeliveryCard = ({
  title,
  amount,
  price,
  subText,
  delivery,
  imageUrl,
  imageWrapperClassName,
  imageClassName,
  seller,
}) => {
  return (
    <div className="flex h-full items-center justify-between rounded-2xl ">
      {delivery ? (
        <div className={`h-full w-[25%]  items-center justify-center `}>
          <Image
            width={80}
            height={57}
            src="/assets/images/Delivery Truck.png"
            alt="delivery truck"
            aria-label="delivery truck"
            className={`h-16 w-24 md:h-24 md:w-32 ${imageClassName}`}
          />
        </div>
      ) : (
        <div
          className={` h-20 w-[25%] overflow-clip rounded-[40%] border bg-[#D9D9D9]  object-cover object-center shadow-[0_0_5px_5px] shadow-black/60 md:h-24 md:w-[15%] ${imageWrapperClassName}`}
        >
          <Image
            width={title == "Mandioca" || title == "Saca Aipim" ? 1000 : 80}
            height={title == "Mandioca" || title == "Saca Aipim" ? 770 : 80}
            src={imageUrl}
            alt={title}
            className={` aspect-square size-full object-cover  object-center ${imageClassName}`}
          />
        </div>
      )}
      <div
        className={`flex h-fit flex-1 flex-col  px-[3%] py-[2%] text-black  ${seller ? "md-gap-4 gap-2" : "gap-4 md:gap-6"}`}
      >
        <Typography
          variant="h3"
          className="font-montserrat text-lg font-medium capitalize leading-none md:text-lg"
        >
          {title}
        </Typography>
        <div className="flex w-full items-center justify-between gap-1">
          <Typography
            variant="paragraph"
            className="font-montserrat text-lg font-medium  leading-none "
          >
            {amount}kg
          </Typography>
          <Typography
            variant="paragraph"
            className="font-montserrat text-lg font-medium  leading-none "
          >
            R${price}
          </Typography>
        </div>
        {delivery && (
          <Typography
            variant="h2"
            className="w-full px-[5%] font-montserrat text-lg font-medium capitalize leading-none md:text-lg"
          >
            {subText}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default DeliveryCard;
