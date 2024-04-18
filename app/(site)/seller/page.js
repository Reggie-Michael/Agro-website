"use client";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Loading from "@/app/loading";
import { Button, Typography } from "@material-tailwind/react";
import DeliveryCard from "@/components/DeliveryCard";

const SellerHome = () => {
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
                status={"Productor"}
                name={"Jose Silva"}
                imageUrl={"/assets/images/Profile Picture2.png"}
                seller
              />
              <div className="flex min-h-1/2 w-full md:w-2/5 lg:w-1/2 flex-col gap-2">
                <div className="flex w-full flex-col gap-2">
                  <div className="flex w-full items-center justify-between px-2">
                    <Typography
                      variant="h4"
                      className="font-montserrat text-lg font-bold text-[#171717]"
                    >
                      Pedidos Recebidos
                    </Typography>
                    <Button className="font-montserrat text-base font-bold capitalize text-[#FF5714] shadow-none">
                      Ver mais
                    </Button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <DeliveryCard
                      title="Saca Aipim"
                      amount="20"
                      price="1300"
                      seller
                      imageWrapperClassName="!size-12 !md:size-16 !rounded-full shadow-[0_0_5px_5px] shadow-black/40"
                      imageUrl={"/assets/images/Image yam.png"}
                    />
                    <DeliveryCard
                      title="Saca Laranja"
                      amount="5"
                      price="250"
                      seller
                      imageWrapperClassName="!size-12 !md:size-16  !rounded-full shadow-[0_0_5px_5px] shadow-black/40"
                      imageUrl={"/assets/images/Image orange.png"}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-between px-2">
                  <Typography
                    variant="h4"
                    className="font-montserrat text-lg font-bold text-[#171717]"
                  >
                    Contabil
                  </Typography>
                  <Button className="font-montserrat text-base font-bold capitalize text-[#FF5714] shadow-none">
                    Ver mais
                  </Button>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <div className="flex w-full items-center justify-between px-2">
                    <Typography
                      variant="h4"
                      className="font-montserrat text-lg font-bold text-[#171717]"
                    >
                      Noticias
                    </Typography>
                    <Button className="font-montserrat text-base font-bold capitalize text-[#FF5714] shadow-none">
                      Ver mais
                    </Button>
                  </div>
                  <Typography
                    variant="h4"
                    className="font-montserrat text-base font-normal text-black"
                  >
                    (Portal X) Estima-se que o mes Y seja um mês de menos
                    chuvas.
                  </Typography>
                </div>
              </div>
              <div className="flex h-1/6 md:h-3/5 w-full items-center justify-center gap-3 md:gap-5 lg:gap-7">
                <div className="flex h-full w-fit flex-col items-center">
                  <div className="flex w-3 md:w-5 lg:w-7  flex-1 items-end overflow-clip rounded-lg bg-[#C9F2FF]">
                    <hr
                      className={` h-[35%] w-full rounded-xl border-0 bg-[#00B4D8]`}
                    />
                  </div>
                  <Typography
                    variant="h5"
                    className=" text-xs font-normal text-black"
                  >
                    fev
                  </Typography>
                </div>
                <div className="flex h-full w-fit flex-col items-center">
                  <div className="flex w-3 md:w-5 lg:w-7 flex-1 items-end overflow-clip rounded-lg bg-[#C9F2FF]">
                    <hr
                      className={` h-[45%] w-full rounded-xl border-0 bg-[#00B4D8]`}
                    />
                  </div>
                  <Typography
                    variant="h5"
                    className=" text-xs font-normal text-black"
                  >
                    mar
                  </Typography>
                </div>
                <div className="flex h-full w-fit flex-col items-center">
                  <div className="flex w-3 md:w-5 lg:w-7 flex-1 items-end overflow-clip rounded-lg bg-[#C9F2FF]">
                    <hr
                      className={` h-[55%] w-full rounded-xl border-0 bg-[#00B4D8]`}
                    />
                  </div>
                  <Typography
                    variant="h5"
                    className=" text-xs font-normal text-black"
                  >
                    jan
                  </Typography>
                </div>
                <div className="flex h-full w-fit flex-col items-center">
                  <div className="flex w-3 md:w-5 lg:w-7 flex-1 items-end overflow-clip rounded-lg bg-[#C9F2FF]">
                    <hr
                      className={` h-[35%] w-full rounded-xl border-0 bg-[#00B4D8]`}
                    />
                  </div>
                  <Typography
                    variant="h5"
                    className=" text-xs font-normal text-black"
                  >
                    abr
                  </Typography>
                </div>
                <div className="flex h-full w-fit flex-col items-center">
                  <div className="flex w-3 md:w-5 lg:w-7 flex-1 items-end overflow-clip rounded-lg bg-[#C9F2FF]">
                    <hr
                      className={` h-[65%] w-full rounded-xl border-0 bg-[#00B4D8]`}
                    />
                  </div>
                  <Typography
                    variant="h5"
                    className=" text-xs font-normal text-black"
                  >
                    mai
                  </Typography>
                </div>
                <div className="flex h-full w-fit flex-col items-center">
                  <div className="flex w-3 md:w-5 lg:w-7 flex-1 items-end overflow-clip rounded-lg bg-[#C9F2FF]">
                    <hr
                      className={` h-[75%] w-full rounded-xl border-0 bg-[#00B4D8]`}
                    />
                  </div>
                  <Typography
                    variant="h5"
                    className=" text-xs font-normal text-black"
                  >
                    jun
                  </Typography>
                </div>
              </div>
            </div>
            <Navbar />
          </Suspense>
        </div>
      )}{" "}
    </>
  );
};

export default SellerHome;
