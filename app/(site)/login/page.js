"use client";
import Loading from "@/app/loading";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@material-tailwind/react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Login = () => {
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

  return (
    <>
      {isLoading ? (
        <Loading className={loaderHidden ? "animate__slideOutLeft" : ""} />
      ) : (
        <div className="flex min-h-dvh  w-full items-center justify-center bg-[#3D6440] px-[3%] text-white md:px-[7.5%] lg:py-[2%]">
          <div className="flex h-5/6 min-h-fit w-full  flex-col items-center justify-between gap-6 md:w-4/5 md:gap-10 lg:h-full lg:w-3/5">
            <div className="flex w-full flex-1 flex-col items-center">
              <div className="flex size-52 object-cover object-center lg:size-72">
                <Image
                  src="/assets/images/Agro Comibation Mark.png"
                  height={265}
                  width={265}
                  alt="Agro is all"
                  // className="w-full"
                />
              </div>
              <form className="flex h-3/5 w-full flex-col items-center justify-between gap-7 rounded-3xl border border-black border-opacity-[0.26] bg-white p-9 text-black shadow-inner shadow-[#121212]/40">
                <div className="flex w-full flex-col  gap-7">
                  <input
                    placeholder="E-mail ou numero de telefone"
                    type="text"
                    className="h-12 rounded-xl border-black/30 bg-[#DED5D5] px-4 text-[13px] text-black shadow-md shadow-black/20 outline-0 placeholder:text-black focus-within:placeholder:text-opacity-80 focus:border md:text-[15px] lg:h-16 "
                  />
                  <div className="flex w-full items-center  rounded-xl border-black/30 bg-[#DED5D5] shadow-md shadow-black/20  focus-within:border">
                    <input
                      placeholder="Senha"
                      type="password"
                      className="h-12 flex-1 rounded-xl  border-none !bg-transparent px-4 text-[13px] text-black outline-0 placeholder:text-black focus-within:placeholder:text-opacity-80 md:text-[15px] lg:h-16 "
                    />
                    <IconButton className="size-fit">
                      <FontAwesomeIcon title="Exibir" icon={faEye} />
                    </IconButton>
                  </div>

                  <Link
                    href="/reset_password"
                    className="-mt-2 border-b-black/50 transition-all hover:border-b"
                  >
                    Esqueceu a senha?
                  </Link>
                </div>

                <Button
                  onClick={() => {
                    sessionStorage.setItem("authorized", true);
                    router.push("/home");
                  }}
                  className="h-12 w-full rounded-xl !bg-[#DED5D5] capitalize !text-black hover:bg-[#DED5D5]/70 hover:shadow lg:h-16 lg:!text-lg "
                >
                  Entrar
                </Button>
              </form>
              <Box className="mt-7 text-base text-[#EEEEEE] lg:flex lg:w-full">
                <Link
                  className="transition hover:text-opacity-85 hover:underline"
                  href={"/login"}
                >
                  faça login&nbsp;
                </Link>
                ou&nbsp; <br />
                <Link
                  className="transition hover:text-opacity-85 hover:underline"
                  href={"/register"}
                >
                  cadastre-se aqui
                </Link>
              </Box>
            </div>
            <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center">
              <Typography
                variant="body1"
                className="text-lg font-normal leading-none text-[#EEEEEE]"
              >
                VOCÊ PRODUTOR?
              </Typography>
              <Button
                disableTouchRipple
                onClick={() => router.replace("/seller")}
                className="text-lg font-normal leading-none !text-[#EEEEEE]"
              >
                Entre AQUI
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
