import {
  faBell,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@material-tailwind/react";
import { ExpandMore, Notifications, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Header = ({ status, name, imageUrl, seller, className }) => {
  const [open, setOpen] = useState(true);
  const [hidden, setHidden] = useState(false);
  const constraintsRef = useRef(null);
  const [dragStartY, setDragStartY] = useState(0);
  // Function to toggle the open state
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setHidden(true);
      }, 300); // Set the delay time in milliseconds (500ms in this example)

      // Clear the timer on component unmount or when open is true again
      return () => clearTimeout(timer);
    } else {
      setHidden(false); // Reset hidden state when opening the drawer
    }
  }, [open]);
  return (
    <motion.div
      //    initial={{ y: "100%" }}
      //  animate={{ height: "fit-content" }}
      //  transition={{ type: "spring", stiffness: 80, damping: 5 }}
      className={`header flex w-full flex-col items-center gap-4 md:gap-6 transition-all ${className}`}
    >
      {/* profile start  */}

      <motion.div
        exit={{ y: "100%" }}
        animate={{ y: !open ? "-1000%" : 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        className={` flex w-full justify-between gap-1 ${hidden ? "hidden" : ""}`}
      >
        <div className="flex w-3/5 gap-3 lg:gap-4">
          <div className="overflow-clip rounded-lg object-cover object-center md:size-14">
            <Image
              src={imageUrl}
              width={48}
              height={seller ? 48 : 73}
              alt="profile"
              className="object-cover object-center md:size-14"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <p className="font-montserrat text-xs font-medium capitalize text-[#686D76] md:text-base lg:text-lg">
              {status}
            </p>
            <div className="flex flex-1 items-center justify-between gap-2 md:justify-normal">
              <h5 className="font-montserrat text-base font-medium capitalize text-[#171717] md:text-base lg:text-xl">
                {name}
              </h5>

              <IconButton>
                <FontAwesomeIcon
                  aria-label="see more"
                  title="see more"
                  icon={faChevronDown}
                  className="text-base text-[#686D76]  lg:text-lg"
                />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="flex w-[29%] items-center justify-between md:w-[15%] lg:w-[10%]">
          <IconButton
            color="#171717"
            sx={{ background: "#F4F5F7" }}
            className="border bg-[#F4F5F7] text-base text-[#171717]"
          >
            <FontAwesomeIcon
              aria-label="notifications"
              icon={faBell}
              className="text-base text-[#171717] md:text-lg lg:text-xl"
            />
          </IconButton>
          <IconButton
            color="#171717"
            sx={{ background: "#F4F5F7" }}
            className="border bg-[#F4F5F7] text-base text-[#171717]"
          >
            <Image
              src={"/assets/icons/shoppingIcon.svg"}
              width={19}
              height={19}
              alt="s"
              className={`aspect-square md:size-5`}
            />
          </IconButton>
        </div>
      </motion.div>
      {/* profile end  */}
      {/* search input start  */}
      <motion.div
        //    initial={{ y: "100%" }}
        animate={{ y: !open ? "-1000%" : 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        className={`flex w-full rounded-xl border border-[#D3DBE1] pl-2 focus-within:border focus-within:border-[#686D76] ${hidden ? "hidden" : ""}`}
      >
        <IconButton color="#686D76" className="text-base">
          <FontAwesomeIcon
            aria-label="search"
            icon={faMagnifyingGlass}
            className="text-base text-[#686D76] md:text-lg lg:text-xl"
          />
        </IconButton>
        <Input
          placeholder="Search"
          labelProps={{
            className: "hidden",
          }}
          className="flex-1 border-none text-[#686D76] outline-none placeholder:text-[#686D76] "
        />
      </motion.div>
      {/* search input end  */}
      {/* <hr className="h-1 w-8 cursor-grab rounded bg-[#39414D]" /> */}

      <motion.div ref={constraintsRef} className="h-2 max-w-8">
        <motion.div
          drag="y"
          // dragDirectionLock
          // _dragX={1}

          // _dragY={open ? 2 : -2} // Set _dragY to positive for up and negative for down when open is true
          // onDragStart={toggleDrawer}
          // onDragEnd={(event, info)=> {
          //      // toggleDrawer()
          //      const deltaY = info.point.y - info.pointPrev.y;
          // }}
          onDragStart={(event, info) => setDragStartY(info.point.y)}
          onDragEnd={(event, info) => {
            const deltaY = info.point.y - dragStartY;
            if (deltaY > 0 && !open) {
              console.log("Dragged down");
              // Dragged down logic
              toggleDrawer();
            } else if (deltaY < 0 && open) {
              console.log("Dragged up");
              toggleDrawer();
              // Dragged up logic
            }
          }}
          // onDrag
          dragElastic={{ top: open ? 0.2 : 0, bottom: open ? 0 : 0.2 }}
          dragConstraints={constraintsRef}
          // onClick={() => setOpen((cur) => !cur)}
          className="h-1 w-8 cursor-grab rounded bg-[#39414D] md:w-12 lg:w-16"
        />
      </motion.div>
    </motion.div>
  );
};

export default Header;
