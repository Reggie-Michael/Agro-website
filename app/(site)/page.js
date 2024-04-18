"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "../loading";
// import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { Button, Typography } from "@material-tailwind/react";
// import { SplideCarousel } from "@/components/Carousel";
import Image from "next/image";
import { IconButton } from "@mui/material";
// import { Favorite, FavoriteRounded, StarRounded } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderHidden, setLoaderHidden] = useState(false);

  useEffect(() => {
    // Page load animation trackers
    const hideLoader = setTimeout(() => setLoaderHidden(true), 1200); // Adjust timing for hide animation
    const setLoadingFalse = setTimeout(() => setIsLoading(false), 2000);

    // Clean up timeouts to avoid memory leaks
    return () => {
      clearTimeout(hideLoader);
      clearTimeout(setLoadingFalse);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading className={loaderHidden ? "animate__slideOutLeft" : ""} />
      ) : (
        <div className="flex size-full min-h-[600px] flex-col items-center gap-5 rounded-lg  bg-white p-4 md:min-h-[650px] lg:min-h-[770px] lg:py-[2%] ">
          <Suspense fallback={<Loading />}>
            <div className="flex w-full flex-1 flex-col gap-4">
              <Header
                status={"Cliente,"}
                name={"Joana Silva"}
                imageUrl={"/assets/images/Profile Picture.png"}
              />
              <div className="flex h-fit w-full flex-col gap-2  lg:gap-6">
                <div className="flex w-full items-center justify-between">
                  <Typography
                    variant="h4"
                    className="font-montserrat text-lg font-medium text-[#171717]"
                  >
                    Categorias
                  </Typography>
                  <Button className="font-montserrat text-base font-bold capitalize text-[#FF5714] shadow-none">
                    Ver todos
                  </Button>
                </div>
                <div className="grid w-5/6 flex-1  grid-cols-2 gap-2 md:w-4/6 md:gap-4 lg:w-3/5">
                  <div className="flex size-full flex-col items-center object-center ">
                    <div className="w-full rounded-xl md:border md:border-[#7B7777]">
                      <Image
                        width={1000}
                        height={770}
                        src="/assets/images/Image yam.png"
                        alt="Yam"
                        className="aspect-square h-24 w-full rounded-xl border-2 border-black/85 object-cover object-center md:h-36  lg:h-48"
                      />
                    </div>
                    <Typography className="mt-0.5 font-montserrat text-xs font-medium">
                      Mandioca
                    </Typography>
                  </div>
                  <div className="flex size-full flex-col items-center justify-center   object-center">
                    <Image
                      width={126}
                      height={104}
                      src="/assets/images/Image rice.png"
                      alt="Rice"
                      className="aspect-square  h-24 w-full object-center  md:h-36 lg:h-48"
                    />
                    <Typography className="mt-0.5 font-montserrat text-xs font-medium">
                      Arroz
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 md:gap-5">
                <div className="flex w-full items-center justify-between">
                  <Typography
                    variant="h4"
                    className="font-montserrat text-lg font-medium text-[#171717]"
                  >
                    Parceiros
                  </Typography>
                  <Button className="font-montserrat text-base font-bold capitalize text-[#FF5714] shadow-none">
                    Ver todos
                  </Button>
                </div>
                <div className="flex w-4/5 flex-col gap-2 md:w-3/5 lg:w-2/6">
                  <div className="box-border flex w-full items-center justify-center rounded-lg bg-[#D9D9D9]  object-cover object-center p-1 md:p-4 lg:h-28">
                    <Image
                      width={250}
                      height={75}
                      src="/assets/images/CAAF Logo.png"
                      alt="CAAF wordmark"
                      className=" size-[85%] object-center md:size-full"
                    />
                  </div>
                  <div className="flex w-full items-center justify-between px-[2%]">
                    <div className="flex items-center md:gap-2">
                      <Typography
                        variant="h3"
                        className="font-montserrat text-xl font-bold text-[#171717] md:text-2xl"
                      >
                        CAAF
                      </Typography>
                      <div className="">
                        <Image
                          width={12}
                          height={14}
                          src="/assets/icons/protectedIcon.svg"
                          alt="✔"
                          className="size-5 object-center md:size-7"
                        />
                      </div>
                    </div>
                    <IconButton is="div" disableRipple>
                      <FontAwesomeIcon
                        aria-label="favorite"
                        icon={faHeart}
                        className={`text-base text-[#D3DBE1] lg:text-lg`}
                      />
                    </IconButton>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <div className="flex size-fit items-center justify-center gap-1 rounded-3xl bg-[#FF5714] px-1 text-white">
                      <IconButton is="div" className="!size-fit !p-1 !text-3xl">
                        <FontAwesomeIcon
                          aria-label="favorite"
                          icon={faStar}
                          className={`text-base text-white lg:text-lg`}
                        />
                      </IconButton>
                      <Typography className="font-montserrat text-xs font-bold ">
                        4.8
                      </Typography>
                    </div>
                    <Typography className="font-montserrat text-base font-bold text-[#686D76] ">
                      Caxias do Sul
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <Navbar />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default Home;
