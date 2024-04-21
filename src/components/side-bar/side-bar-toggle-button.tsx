"use client";
import { sideBarOpenAtom } from "@/atoms";
import { useSetAtom } from "jotai";

export function SideBarToggleButton() {
  const setIsOpen = useSetAtom(sideBarOpenAtom);

  return <button onClick={() => setIsOpen((isOpen) => !isOpen)}>button</button>;
}
