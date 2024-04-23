"use client";
import { sideBarOpenAtom } from "@/atoms";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { SideBarToggleButton } from "./side-bar-toggle-button";

export function SideBar() {
  const isOpen = useAtomValue(sideBarOpenAtom);

  return (
    <nav
      className={clsx(
        "h-full border-r border-gray-400",
        "flex flex-col items-start",
        "relative overflow-x-hidden transition-all",
        {
          "-translate-x-64 w-0 p-0": !isOpen,
          "translate-x-0 w-64 p-4": isOpen,
        }
      )}
    >
      <SideBarToggleButton />
      <Link href="/home">Home</Link>
      <div>Quick Search</div>
    </nav>
  );
}
