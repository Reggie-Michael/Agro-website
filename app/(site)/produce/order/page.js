"use client";
import Loading from "@/app/loading";
import { faComment, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faCheck,
  faComments,
  faSlash,
  faX,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Typography } from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrderMonitor = () => {
  const [orderStatus, setOrderStatus] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Page load animation trackers
    const hideLoader = setTimeout(() => setLoaderHidden(true), 500); // Adjust timing for hide animation
    const setLoadingFalse = setTimeout(() => setIsLoading(false), 1300);

    // Clean up timeouts to avoid memory leaks
    return () => {
      clearTimeout(hideLoader);
      clearTimeout(setLoadingFalse);
    };
  }, []);

  const calculateHeight = (orderStatus) => {
    if (orderStatus - 1 > 0) return `h-${orderStatus - 1}/5`;
    return;
  };

  return (
    <>
      {isLoading ? (
        <Loading className={loaderHidden ? "animate__slideOutLeft" : ""} />
      ) : (
        <div className="flex size-full min-h-[600px] flex-col items-center justify-between gap-5 rounded-xl bg-white  py-[5%] lg:w-3/5 ">
          <Typography
            variant="h2"
            className="max-w-5/6 text-center font-montserrat text-lg font-black uppercase leading-none md:text-lg"
          >
            SEU PEDIDO FOI REALIZADO
          </Typography>
          <div className="flex aspect-square size-fit items-center justify-center rounded-full bg-[#00ba0f] p-2 text-[50px] text-white">
            <FontAwesomeIcon icon={faCheck} className="" />
          </div>
          <div className="flex h-1/2 w-full flex-col gap-6 rounded-xl bg-[#171717] px-[4%] py-[5%] shadow-[0_0_5px_6px] shadow-black/20 ">
            <Typography
              variant="h2"
              className="max-w-5/6  font-montserrat text-lg font-bold  leading-none text-white md:text-xl"
            >
              Status de Compra
            </Typography>
            <div className="flex w-full flex-1 gap-6">
              <div className="relative col-start-1 flex h-full w-3 items-center justify-center">
                <div className="absolute col-start-1 flex h-full w-1 overflow-clip rounded-lg bg-[#39414D]">
                  <hr
                    className={`${orderStatus === 6 ? "h-full" : calculateHeight(orderStatus)} w-full rounded-xl border-0 bg-[#FF5714]`}
                  />
                </div>
                <div className=" z-10 flex h-full flex-col justify-between">
                  {Array.from({ length: 6 }, (_, index) => index).map(
                    (index) => (
                      <div
                        key={`ShoppingStatus_${index}`}
                        className={`size-2.5 rounded-full shadow-[0_0_0_4px] shadow-[#292929] ${orderStatus > index ? "bg-[#FF5714]" : "bg-[#969A9F]"}`}
                      ></div>
                    ),
                  )}
                </div>
              </div>
              <div className="flex h-full flex-1 flex-col justify-between">
                <div className="flex w-full justify-between">
                  <Typography
                    variant="paragraph"
                    className="  font-montserrat text-xs font-normal leading-none text-white md:text-xl"
                  >
                    Pedido realizado
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="  font-montserrat text-xs font-normal leading-none text-white md:text-xl"
                  >
                    9:41
                  </Typography>
                </div>
                <div className="flex w-full justify-between">
                  <Typography
                    variant="paragraph"
                    className="  font-montserrat text-xs font-normal leading-none text-white md:text-xl"
                  >
                    Pedido aprovado
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="  font-montserrat text-xs font-normal leading-none text-white md:text-xl"
                  >
                    9:41
                  </Typography>
                </div>
                <div className="flex w-full justify-between">
                  <Typography
                    variant="paragraph"
                    className="  font-montserrat text-xs font-normal leading-none text-white md:text-xl"
                  >
                    Aguardando a entrega
                  </Typography>
                </div>
                <div className="flex w-full justify-between">
                  <Typography
                    variant="paragraph"
                    className="  font-montserrat text-xs font-normal leading-none text-white md:text-xl"
                  >
                    Saida para entrega
                  </Typography>
                </div>
                <div className="flex w-full justify-between">
                  <Typography
                    variant="paragraph"
                    className="  font-montserrat text-xs font-normal leading-none text-white md:text-xl"
                  >
                    Entrega realizada
                  </Typography>
                </div>
                <div className="flex w-full justify-between">
                  <Typography
                    variant="paragraph"
                    className="  font-montserrat text-xs font-normal leading-none text-white md:text-xl"
                  >
                    Feedbacks
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between px-2">
            <div className="size-12 rounded-xl bg-[#D9D9D9]"></div>
            <div className="flex h-full flex-1 flex-col gap-3 px-[3%]  ">
              <div className="flex w-full items-center justify-between gap-1">
                <Typography
                  variant="h2"
                  className="font-montserrat text-lg font-medium capitalize leading-none "
                >
                  Cooperativa X
                </Typography>
                <Button
                  style={{ textTransform: "none" }}
                  className="flex items-center justify-center rounded-xl bg-gradient-to-t from-[#FF5714_1.88%] via-[#FF7D49_50.4%] to-[#FF9F78_100%]  px-3 py-1 font-montserrat text-xs font-normal md:text-base "
                >
                  Detalhes
                </Button>
              </div>
              <div className="flex w-[90%] items-center justify-between gap-1">
                <Typography
                  variant="h5"
                  className="font-montserrat text-base font-bold capitalize leading-none text-[#686D76]"
                >
                  R$ 2850
                </Typography>
                <Typography
                  variant="h5"
                  className="font-montserrat text-base font-bold capitalize leading-none text-[#686D76]"
                >
                  3 itens
                </Typography>
                <Typography
                  variant="h5"
                  className="font-montserrat text-base font-bold capitalize leading-none text-[#686D76]"
                >
                  Mastercard
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex w-4/5 items-center  justify-between md:w-3/5">
            <IconButton className="relative flex size-16 items-center justify-center rounded-full bg-[#FD7640] !p-2 text-xl text-white">
              {/* <div className="w-8 h-[2px] bg-white border-none rotate-45 absolute"></div> */}
              {/* <div className="w-8 h-[2px] bg-white border-none -rotate-45 absolute"></div> */}
              <FontAwesomeIcon
                icon={faSlash}
                className="absolute rotate-6 font-thin "
              />
              <FontAwesomeIcon
                icon={faSlash}
                className="absolute rotate-[95deg] font-thin"
              />
            </IconButton>
            <IconButton className=" flex size-16 items-center justify-center rounded-full bg-[#89EC99] !p-3 text-lg text-white">
              <Image
                src={"/assets/icons/chatIcon.svg"}
                height={40}
                width={40}
                alt="chat"
                className=""
              />
            </IconButton>
            <IconButton className=" flex size-16 items-center justify-center rounded-full !p-0 text-lg text-white">
              <Image
                src={"/assets/icons/callIcon.svg"}
                height={42}
                width={42}
                alt="call"
                className="size-full"
              />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderMonitor;
