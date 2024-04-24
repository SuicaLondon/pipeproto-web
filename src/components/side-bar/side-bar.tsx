"use client";
import { sideBarOpenAtom } from "@/atoms";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { SideBarToggleButton } from "./side-bar-toggle-button";
import { memo } from "react";

export const SideBar = memo(function SideBar() {
  const isOpen = useAtomValue(sideBarOpenAtom);

  return (
    <nav
      className={clsx(
        "h-full border-r border-gray-400",
        "flex flex-col items-start",
        "relative overflow-x-hidden transition-all",
        {
          "w-0 -translate-x-64 p-0": !isOpen,
          "w-64 translate-x-0 p-4": isOpen,
        },
      )}
    >
      <SideBarToggleButton />
      <Link href="/home">Home</Link>
      <div>Quick Search</div>
    </nav>
  );
});
