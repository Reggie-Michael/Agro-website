"use client";
import Loading from "@/app/loading";
import {
  faAngleRight,
  faArrowRight,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Typography } from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProduceView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const router = useRouter();

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
        <div className="flex size-full min-h-[600px] flex-col items-center gap-2 rounded-xl bg-white lg:w-3/5  ">
          <div className="flex h-1/2 w-full flex-col justify-between gap-2 overflow-clip rounded-lg">
            <div className=" relative h-4/5 w-full items-center justify-start overflow-clip rounded-xl border object-cover object-center shadow-[0_0_10px_10px_black] shadow-black/50">
              <Image
                width={1000}
                height={667}
                src="/assets/images/Harvest image.jpg"
                alt="harvest"
                className="size-full object-cover object-[60%_70%]"
              />
              <div className="absolute bottom-3 right-3  size-12 h-16 md:size-[52px] md:h-20">
                <Image
                  width={763}
                  height={1080}
                  src="/assets/images/selo 2.png"
                  alt="logo"
                  className="aspect-[2/3] size-full object-cover object-center"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 px-[5%] text-black">
              <Typography
                variant="h2"
                className="col-span-2 font-montserrat text-lg font-medium capitalize leading-none"
              >
                Mandioca
              </Typography>
              <Typography
                variant="h4"
                className="text-right font-montserrat text-lg font-medium capitalize leading-none"
              >
                R$ 65/kg
              </Typography>
              <div className="col-span-2 flex items-center">
                <div className="flex w-3/5 items-center justify-between gap-3 md:w-2/5 lg:w-1/5">
                  <div className="flex size-fit items-center justify-center gap-1 ">
                    <div className="!size-fit">
                      <FontAwesomeIcon
                        aria-label="rating"
                        icon={faStar}
                        // className=" text-[#686D76]"
                      />
                    </div>
                    <Typography className="font-montserrat text-xs font-bold  ">
                      4.9
                    </Typography>
                  </div>
                  <div className="rounded-2xl bg-[#292929] p-2">
                    <Typography
                      variant="paragraph"
                      className="font-montserrat text-xs font-normal capitalize leading-none text-[#F4F5F7]"
                    >
                      Mandioca
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <IconButton className="flex h-full w-2/5 justify-start  rounded-none lg:w-1/6 ">
                  <FontAwesomeIcon
                    aria-label="favorite"
                    icon={faHeart}
                    className="!w-fit text-lg text-[#FF5714] lg:text-lg"
                  />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="flex h-1/2 w-full flex-col gap-4">
            <div className="flex h-4/5 w-full rounded-2xl bg-[#1F1E1E] p-[4%] text-[#F4F5F7]">
              <div className="flex w-full flex-col justify-between gap-3">
                <div className="grid h-fit w-full grid-cols-2">
                  <Button className="flex items-center justify-center font-montserrat text-xs font-medium capitalize">
                    Menu
                  </Button>
                  <Button className="flex items-center justify-center font-montserrat text-xs font-medium capitalize">
                    Review
                  </Button>
                </div>
                <div className="flex h-1 w-full overflow-clip rounded-lg bg-[#39414D]">
                  <hr className="h-full w-1/2 rounded-xl border-0 bg-[#FF5714]" />
                </div>
                <Typography
                  variant="paragraph"
                  className="font-montserrat text-xs font-medium leading-none "
                >
                  Mandioca produzida na regiao X, da especie Y, no metodo de
                  cultivo organico Z.
                </Typography>
                <div className="flex items-center justify-between">
                  <div className="flex w-3/5 flex-col gap-3">
                    <Typography
                      variant="paragraph"
                      className="font-montserrat text-lg font-normal leading-none "
                    >
                      Quantidade
                    </Typography>
                    <div className="flex h-fit w-full items-center rounded-full border border-[#39414D] bg-[#292929] px-[5%] py-[2%] font-montserrat font-medium leading-none text-[#686D76]">
                      Quantidade em kg
                    </div>
                  </div>
                  <div className="flex h-full">
                    <IconButton className="size-fit">
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-xs text-[#D3DBE1] md:text-base"
                      />
                    </IconButton>
                  </div>
                </div>
                <div className="flex w-[90%] items-center justify-between">
                  <Typography
                    variant="paragraph"
                    className="font-montserrat text-lg font-medium leading-none "
                  >
                    20kg
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="font-montserrat text-lg font-medium leading-none "
                  >
                    R$ 65/kg
                  </Typography>
                  <div className="flex h-full flex-col  items-end gap-1">
                    <Typography
                      variant="paragraph"
                      className="font-montserrat text-xs font-medium capitalize leading-none "
                    >
                      Total
                    </Typography>
                    <Typography
                      variant="paragraph"
                      className="font-montserrat text-lg font-medium capitalize leading-none "
                    >
                      R$ 1300
                    </Typography>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 px-[10%]">
                  <Button className="rounded-full bg-[#39414D] px-5 py-2 font-montserrat text-lg font-medium leading-none text-white shadow-md shadow-black/20">
                    Resetar
                  </Button>
                  <Button className="rounded-full bg-gradient-to-t from-[#FF5714_1.88%] via-[#FF7D49_50.4%] to-[#FF9F78_100%] px-5 py-2 font-montserrat text-lg font-medium leading-none text-white shadow-md shadow-black/20">
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid h-[10%] grid-cols-2 px-[5%]">
              <div className="flex h-full flex-col gap-2">
                <Typography
                  variant="paragraph"
                  className="font-montserrat text-xs font-medium capitalize leading-none "
                >
                  Total no Carrinho
                </Typography>
                <Typography
                  variant="paragraph"
                  className="font-montserrat text-lg font-medium capitalize leading-none "
                >
                  R$ 2550
                </Typography>
              </div>
              <Button
                style={{ textTransform: "none" }}
                onClick={() => router.push("/produce/delivery")}
                className="flex items-center justify-center rounded-xl bg-gradient-to-t from-[#FF5714_1.88%] via-[#FF7D49_50.4%] to-[#FF9F78_100%] px-0.5 font-montserrat text-base font-medium shadow shadow-black/20 md:px-[2%] md:text-lg"
              >
                Ir para o carrinho
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProduceView;
