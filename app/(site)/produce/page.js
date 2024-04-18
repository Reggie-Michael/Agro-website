"use client";
import Loading from "@/app/loading";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ProduceCard from "@/components/ProduceCard";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const Produce = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let hideLoader;
    let setLoadingFalse;

    // Check authentication status
    const isAuthenticated = checkAuthentication(); // Example: Replace with your authentication logic

    if (!isAuthenticated) {
      router.push("/login");
    } else {
      // Page load animation trackers
      hideLoader = setTimeout(() => setLoaderHidden(true), 1200); // Adjust timing for hide animation
      setLoadingFalse = setTimeout(() => setIsLoading(false), 2000);
    }

    // Clean up timeouts to avoid memory leaks
    return () => {
      clearTimeout(hideLoader);
      clearTimeout(setLoadingFalse);
    };
  }, [router]);

  const checkAuthentication = () => {
    // Example: Check if user is authenticated (e.g., by checking if a token is present)
    const token = sessionStorage.getItem("authorized");
    return !!token; // If token exists, user is authenticated
  };

  return (
    <>
      {isLoading ? (
        <Loading className={loaderHidden ? "animate__slideOutLeft" : ""} />
      ) : (
        <div className="flex size-full flex-col items-center gap-2 rounded-lg bg-white p-[4%] lg:py-[2%] ">
          <Suspense fallback={<Loading />}>
            <div className="flex w-full flex-1 flex-col ">
              <Header
                status={"Cliente,"}
                name={"Joana Silva"}
                imageUrl={"/assets/images/Profile Picture.png"}
              />
              <div className="flex h-4/6 w-full flex-col gap-4 md:h-5/6">
                <Typography
                  variant="h2"
                  className="font-montserrat text-lg font-medium text-black"
                >
                  Produtores de Mandioca
                </Typography>
                <div className="flex flex-1 flex-col gap-4 ">
                  <ProduceCard
                    title="Cooperativa X"
                    location="Organico"
                    rating="4.9"
                    distance="300&nbsp;"
                    liked
                    borderBright
                  />
                  <ProduceCard
                    title="Cooperativa Y"
                    location=""
                    rating="3.5"
                    distance="30&nbsp;"
                    borderBright
                  />
                  <ProduceCard
                    title="Cooperativa Z"
                    location="Transgenicos"
                    rating="4.7"
                    distance="70"
                  />
                  <ProduceCard
                    title="Cooperativa K"
                    location="Agricultura Sustentavel"
                    rating="4.9"
                    distance="130"
                    liked
                  />
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

export default Produce;
