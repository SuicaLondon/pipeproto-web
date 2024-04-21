"use client";
import React from "react";
import { SideBarToggleButton } from "../side-bar/side-bar-toggle-button";
import { sideBarOpenAtom } from "@/atoms";
import { useAtomValue } from "jotai";

export function Header() {
  const isOpen = useAtomValue(sideBarOpenAtom);
  return (
    <header className="flex w-screen p-4">
      {!isOpen && <SideBarToggleButton />}
    </header>
  );
}
