"use client";
import { Input } from "@material-tailwind/react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();

  return (
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
          <form className="flex h-3/5 w-full flex-col items-center justify-between gap-3 rounded-3xl border border-black border-opacity-[0.26] bg-white p-9 text-black shadow-inner shadow-[#121212]/40">
            <div className="flex w-full flex-col  gap-7">
              <Box className="w-full rounded-xl lg:h-16">
                <TextField
                  // variant="filled"
                  color="neutral"
                  fullWidth
                  label="E-mail ou numero de telefone"
                  required
                  sx={{
                    background: "#DED5D5",
                    border: "none",
                    outline: "none",
                    borderRadius: "inherit",
                    height: "inherit",
                    color: "black",
                    "& *": {
                      color: "black !important",
                      borderRadius: "inherit !important",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "inherit",
                      height: "110%",

                      border: 0,
                      outline: 0,
                    },
                    "& .MuiInputBase-input": {
                      // padding: "10px 3px",
                    },
                    "& .MuiInputBase-root": {
                      height: "inherit",
                      // padding: "10px 3px",
                    },
                  }}
                  className="shadow-lg"
                />
              </Box>
              <Box className="w-full rounded-xl lg:h-16">
                <TextField
                  color="neutral"
                  fullWidth
                  required
                  type="password"
                  label="Senha"
                  sx={{
                    background: "#DED5D5",
                    border: "none",
                    outline: "none",
                    borderRadius: "inherit",
                    height: "inherit",
                    color: "black",
                    "& *": {
                      color: "black !important",
                      borderRadius: "inherit !important",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "inherit",
                      height: "110%",

                      border: 0,
                      outline: 0,
                    },
                    "& .MuiInputBase-input": {
                      // height: "inherit",
                      // padding: "10px 3px",
                    },
                    "& .MuiInputBase-root": {
                      height: "inherit",
                      // padding: "10px 3px",
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button>Exibir</Button>
                      </InputAdornment>
                    ),
                  }}
                  className="shadow-lg"
                />
              </Box>
              {/* <Input
              size="lg"
              type="text"
              // placeholder="+123 4567 890"
              // color="blue"
              variant="standard"
              name="email"
              required
              className="h-14 rounded-xl border-none bg-[#DED5D5] px-3 text-black outline-none placeholder:text-black focus-within:placeholder:text-black/70"
              // label="E-mail ou numero de telefone"
              placeholder="E-mail ou numero de telefone"
            /> */}
              <Box className="w-full pl-5">
                <Link
                  href="/reset_password"
                  className="border-b-black/50 transition-all hover:border-b"
                >
                  Esqueceu a senha?
                </Link>
              </Box>
            </div>

            <Button
              onClick={() => {
                sessionStorage.setItem("authorized", true);
                router.push("/");
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
        <div className="flex items-start gap-2 flex-col lg:flex-row lg:items-center">
          <Typography
            variant="body1"
            className="text-lg font-normal leading-none text-[#EEEEEE]"
          >
            VOCÊ PRODUTOR?
          </Typography>
          <Button
            disableTouchRipple
            className="text-lg font-normal leading-none !text-[#EEEEEE]"
          >
            Entre AQUI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
