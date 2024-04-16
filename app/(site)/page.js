"use client";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import { useRouter } from "next/navigation";

const Home = () => {
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
        <div>Hello</div>
      )}
    </>
  );
};

export default Home;
