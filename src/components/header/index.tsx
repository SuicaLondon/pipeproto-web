"use client";
import React from "react";
import { SideBarToggleButton } from "../side-bar/side-bar-toggle-button";
import { sideBarOpenAtom } from "@/atoms";
import { useAtomValue } from "jotai";
import { Icon } from "../icon";
import clsx from "clsx";

export function Header() {
  const isOpen = useAtomValue(sideBarOpenAtom);
  return (
    <header className={clsx("flex h-16 w-full items-center p-4")}>
      {!isOpen && <SideBarToggleButton />}
      <Icon icon="table" className="h-6 w-6" />
    </header>
  );
}
