import React, { useState } from "react";
import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-5 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello,${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div
            onClick={() => session && router.push("/orders")}
            className="link cursor-pointer"
          >
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative flex items-center link"
          >
            <span className="absolute right-0 top-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold ">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-8" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm ml-1">
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-amazon_blue-light text-white text-sm  space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-4" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Amazon Buisness</p>
        <p className="link">Today's Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        <p className="link hidden lg:inline-flex">Buy Agian</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      </div>
    </header>
  );
}

export default Header;
