"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Loading from "../loading";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <section className="flex h-dvh  w-full items-center justify-center bg-[#3D6440] px-[3%] py-[2%] text-black md:px-[7.5%] lg:px-[10%]  ">
          {children}
        </section>
      </ThemeProvider>
    </Suspense>
  );
}
