"use client";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    password: "",
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
  const handleGoBack = () => {
    try {
        // Try to go back in the history
        router.back();
    } catch (error) {
        // If going back fails, navigate to /login
        router.push('/login');
    }
};


  return (
    <div className="flex size-full flex-col items-center gap-4 rounded-lg border border-black/30  border-opacity-[0.26] bg-white p-[4%] shadow-inner shadow-[#121212]/20">
      <div className="w-full">
        <Button
          ripple={false}
          onClick={handleGoBack}
          className="!bg-transparent text-base font-normal capitalize text-black shadow-none hover:bg-black/10 hover:opacity-75  hover:shadow-none lg:text-lg"
        >
          Voltar
        </Button>
      </div>
      <form className="flex h-4/5  w-[90%] flex-col justify-between">
        <div className="flex h-3/5  w-full flex-col gap-3 md:gap-5">
          <input
            placeholder="Nome completo"
            label="Nome completo"
            type="text"
            name="fullName"
            onChange={handleInputChange}
            className="h-12 rounded-xl border-black/30 bg-[#DED5D5] px-4 text-[13px] text-[#DED5D5] shadow-md shadow-black/20 outline-0 placeholder:text-black focus-within:placeholder:text-opacity-80 focus:border md:text-[15px] lg:h-16 "
          />
          <input
            placeholder="Data de nascimento"
            label="Nome completo"
            type="text"
            name="dateOfBirth"
            onChange={handleInputChange}
            className="h-12 rounded-xl border-black/30 bg-[#DED5D5] px-4 text-[13px] text-[#DED5D5] shadow-md shadow-black/20 outline-0 placeholder:text-black focus-within:placeholder:text-opacity-80 focus:border md:text-[15px] lg:h-16 "
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleInputChange}
            className="h-12 rounded-xl border-black/30 bg-[#DED5D5] px-4 text-[13px] text-[#DED5D5] shadow-md shadow-black/20 outline-0 placeholder:text-black focus-within:placeholder:text-opacity-80 focus:border md:text-[15px] lg:h-16 "
          />
          <input
            type="number"
            placeholder="Numero de telefone"
            label="Numero de telefone"
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
            className="h-12 rounded-xl border-black/30 bg-[#DED5D5] px-4 text-[13px] text-[#DED5D5] shadow-md shadow-black/20 outline-0 placeholder:text-black focus-within:placeholder:text-opacity-80 focus:border md:text-[15px] lg:h-16 "
          />

          <div className="flex items-center w-full  rounded-xl border-black/30 bg-[#DED5D5]  shadow-md shadow-black/20 focus-within:border">
            <input
              placeholder="Senha"
              type="password"
              name="password"
              onChange={handleInputChange}
              className="h-12 flex-1 rounded-xl border-none !bg-transparent px-4 text-[13px] text-black  outline-0 placeholder:text-black focus-within:placeholder:text-opacity-80 md:text-[15px] lg:h-16 "
            />
            <IconButton className="size-fit">
              <FontAwesomeIcon title="Exibir" icon={faEye} />
            </IconButton>
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
  );
};

export default Register;
