"use client";
import Loading from "@/app/loading";
import DeliveryCard from "@/components/DeliveryCard";
import { Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProduceDelivery = () => {
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
        <div className="flex size-full min-h-[600px] flex-col items-center gap-5 rounded-xl bg-white px-[3%] py-[5%] lg:w-3/5 ">
          <div className="flex h-1/2 w-full flex-col  gap-4 rounded-lg">
            <Typography
              variant="h2"
              className="text-center font-montserrat text-lg font-black uppercase leading-none md:text-lg"
            >
              CARRINHO
            </Typography>
            <div className="grid w-full flex-1 grid-cols-1 md:gap-3">
              <DeliveryCard
                title="Arroz"
                amount="10"
                price="1000"
                imageClassName="!h-[120%]"
                imageWrapperClassName="!rounded-[35%] bg-[##e6e1d4]"
                imageUrl={"/assets/images/Image rice.png"}
              />
              <DeliveryCard
                title="Mandioca"
                amount="20"
                price="1300"
                // imageClassName="size-[105%]"

                imageUrl={"/assets/images/Image yam.png"}
              />
              <DeliveryCard
                title="Laranja"
                amount="5"
                price="250"
                imageWrapperClassName="!rounded-full"
                imageUrl={"/assets/images/Image orange.png"}
              />
            </div>
          </div>
          <hr className="h-1 w-[90%] border-0 bg-black" />
          <div className="flex h-1/2 w-full flex-col items-center justify-between gap-4">
            <div className="w-full">
              <DeliveryCard
                title="Frete e Entrega"
                amount="35"
                price="300"
                //   imageClassName="size-[120%]"
                delivery
                subText="Entrega em 20 dias "
              />
            </div>
            <div className="grid h-[10%] grid-cols-2 px-[5%]">
              <div className="flex h-full flex-col items-center gap-2">
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
                  R$ 2850
                </Typography>
              </div>
              <Button
                style={{ textTransform: "none" }}
                onClick={() => router.push("/produce/order")}
                className="flex items-center justify-center rounded-xl bg-gradient-to-t from-[#FF5714_1.88%] via-[#FF7D49_50.4%] to-[#FF9F78_100%]  p-2 font-montserrat text-base font-medium shadow shadow-black/20 md:text-lg"
              >
                Finalizar pedido
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProduceDelivery;
