"use client";
import React from "react";
import { SideBarToggleButton } from "../side-bar/side-bar-toggle-button";
import { sideBarOpenAtom } from "@/atoms";
import { useAtomValue } from "jotai";
import { Icon } from "../icon";

export function Header() {
  const isOpen = useAtomValue(sideBarOpenAtom);
  return (
    <header className="flex items-center w-full p-4 h-16">
      {!isOpen && <SideBarToggleButton />}
      <Icon icon="table" className="w-6 h-6" />
    </header>
  );
}
