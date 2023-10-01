import React from "react";
import Image from "next/image";
// import { signIn, signOut, useSession } from "next-auth/client";
import { signIn, signOut, useSession } from "next-auth/react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
// import SearchIcon from "@heroicons/react/24/outline";
import { BeakerIcon, ShoppingCartIcon, Men } from "@heroicons/react/24/outline";

const Header = () => {
  const session = useSession();
  console.log(session);
  // session.user.name

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          {/* <img src={logo} /> */}
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt="new_images"
            className="cursor-pointer"
            // objectFit="contain"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:none px-4"
            type="text"
          />

          <MagnifyingGlassIcon width={20} className="h-144" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session.data ? signIn : signOut} className="link">
            <p className="hover:underline">
              {" "}
              {session.data ? ` Hello ${session.data?.user?.name}` : "SignIn"}
            </p>
            {/* <p>Hello Aditya</p> */}
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">&Orders</p>
          </div>
          <div className="link relative flex items-center ">
            <span className="absolute top-0 right-0 md:right-5 text-center rounded-full text-black font-bold h-4 w-4 bg-yellow-400">
              0
            </span>
            <ShoppingCartIcon width={27} />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">
              Cart
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="w-6 h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      </div>
    </header>
  );
};

export default Header;
