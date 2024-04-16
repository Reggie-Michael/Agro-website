"use client";
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    telephoneNumber: "",
  });
  const wheelListener = (event) => {
    event.preventDefault();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex h-dvh  w-full items-center justify-center bg-[#3D6440] px-[3%] py-[2%] text-black md:px-[7.5%] lg:px-[10%]  ">
      <div className="flex size-full flex-col items-center gap-4 rounded-lg border border-black/30  border-opacity-[0.26] bg-white p-[4%] shadow-inner shadow-[#121212]/20">
        <div className="w-full">
          <Button
            ripple={false}
            onClick={() => router.back()}
            className="!bg-transparent text-base font-normal capitalize text-black shadow-none hover:bg-black/10 hover:opacity-75  hover:shadow-none lg:text-lg"
          >
            Voltar
          </Button>
        </div>
        <form className="flex h-4/5  w-[90%] flex-col justify-between">
          <div className="flex h-3/5  w-full flex-col gap-3">
            <div className="h-12 md:h-[56px]">
              <Input
                placeholder="Nome completo"
                label="Nome completo"
                color="#DED5D5"
                name="fullName"
                onChange={handleInputChange}
                labelProps={{
                  className: ` !outline-[#DED5D5] !text-black mt-2 peer-focus:mt-0 ${formData.fullName && "mt-0"}`,
                }}
                containerProps={{
                  className: "!h-full",
                }}
                className="h-full w-full  !border-t-0    !border-[#DED5D5] !bg-[#DED5D5] text-xs text-black  shadow-md shadow-black/20 outline-0 !outline-[#DED5D5] placeholder:text-black focus-within:placeholder:text-opacity-75 focus:!border-black"
              />
            </div>

            <div className="h-12 md:h-[56px]">
              <Input
                type="date"
                placeholder="Data de nascimento"
                label="Data de nascimento"
                color="#DED5D5"
                name="dateOfBirth"
                onChange={handleInputChange}
                labelProps={{
                  className: ` !border-[#DED5D5] !outline-[#DED5D5] !text-black `,
                }}
                containerProps={{
                  className: "!h-full",
                }}
                className="h-full w-full  !border-t-0    !border-[#DED5D5] !bg-[#DED5D5] text-xs text-black  shadow-md shadow-black/20 outline-0 !outline-[#DED5D5] placeholder:text-black focus-within:placeholder:text-opacity-75 focus:!border-black"
              />
            </div>
            <div className="h-12 md:h-[56px]">
              <Input
                type="email"
                placeholder="E-mail"
                label="E-mail"
                name="email"
                onChange={handleInputChange}
                color="#DED5D5"
                labelProps={{
                  className: ` !outline-[#DED5D5] !text-black mt-2 peer-focus:mt-0 ${formData.email && "mt-0"}`,
                }}
                containerProps={{
                  className: "!h-full",
                }}
                className="h-full w-full  !border-t-0    !border-[#DED5D5] !bg-[#DED5D5] text-xs text-black  shadow-md shadow-black/20 outline-0 !outline-[#DED5D5] placeholder:text-black focus-within:placeholder:text-opacity-75 focus:!border-black"
              />
            </div>
            <div className="h-12 md:h-[56px]">
              <Input
                type="number"
                placeholder="Numero de telefone"
                label="Numero de telefone"
                color="#DED5D5"
                min={0}
                name="telephoneNumber"
                onChange={handleInputChange}
                onBlur={(e) => {
                  // Remove "wheel" event listener
                  e.target.removeEventListener("wheel", wheelListener);
                }}
                onFocus={(e) => {
                  // Add "wheel" event listener
                  e.target.addEventListener("wheel", wheelListener, {
                    passive: false,
                  });
                }}
                labelProps={{
                  className: ` !outline-[#DED5D5] !text-black mt-2 peer-focus:mt-0 ${formData.telephoneNumber && "mt-0"}`,
                }}
                containerProps={{
                  className: "!h-full",
                }}
                className="h-full w-full  !border-t-0    !border-[#DED5D5] !bg-[#DED5D5] text-xs text-black  shadow-md shadow-black/20 outline-0 !outline-[#DED5D5] placeholder:text-black focus-within:placeholder:text-opacity-75 focus:!border-black"
              />
            </div>

            <div className="h-12 md:h-[56px]">
              <Input
                defaultValue="Exibir"
                //  label="Exibir"
                disabled
                color="#DED5D5"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{
                  className: "!h-full",
                }}
                className="h-full w-full  !border-t-0 !border-[#DED5D5] !bg-[#DED5D5] text-right text-base !text-black  shadow-md shadow-black/20 outline-0 !outline-[#DED5D5] placeholder:text-black focus-within:placeholder:text-opacity-75 focus:!border-black"
              />
            </div>
          </div>
          <Button
            onClick={() => {
              sessionStorage.setItem("authorized", true);
              router.push("/");
            }}
            className="h-12 w-full rounded-xl !bg-[#DED5D5] text-base font-normal capitalize !text-black hover:bg-[#DED5D5]/70 hover:shadow lg:h-16 lg:!text-lg "
          >
            Criar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
