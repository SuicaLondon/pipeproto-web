"use client";
import Link from "next/link";
import React from "react";
import { SideBarToggleButton } from "./side-bar-toggle-button";
import { sideBarOpenAtom } from "@/atoms";
import { useAtomValue } from "jotai";

export function SideBar() {
  const isOpen = useAtomValue(sideBarOpenAtom);

  if (!isOpen) return null;
  return (
    <nav className="min-w-64 h-full relative overflow-x-hidden p-4 border-r border-gray-400 flex flex-col items-start">
      <SideBarToggleButton />
      <Link href="/home">Home</Link>
      <div>Quick Search</div>
    </nav>
  );
}
