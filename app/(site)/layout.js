"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Loading from "../loading";
import { Suspense } from "react";
import { usePathname } from 'next/navigation'

export default function Layout({ children }) {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <section className={`flex ${pathname == "/home" ? "lg:min-h-dvh  h-dvh" : " h-dvh "}   w-full items-center justify-center bg-[#3D6440] px-[3%] py-[2%] text-black md:px-[7.5%] lg:px-[10%]`}>
          {children}
        </section>
      </ThemeProvider>
    </Suspense>
  );
}
