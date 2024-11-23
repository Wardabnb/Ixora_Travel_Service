"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useSearchParams } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const userId = JSON.parse(localStorage.getItem("user") || "[]").data.user;

  return (
    <div className="flex items-center justify-between pt-5 px-10 border pb-5 bg-[#E8E8E8]">
      <Image
        src="/logo.jpg"
        height={60}
        width={60}
        alt=""
        className="rounded-full"
      />
      <nav className="flex gap-5 text-black">
        <Link href={`/dashboard?userId=${userId._id}`}>Home</Link>
        <Link href={`/stays?userId=${userId._id}?page=1`}>Stays</Link>
        <Link href={`/flights?userId=${userId._id}?page=1`}>Flights</Link>
        <Link href="#contact">Contact</Link>
        <Link href="/Logout">Logout</Link>
      </nav>
    </div>
  );
};

export default Navbar;
