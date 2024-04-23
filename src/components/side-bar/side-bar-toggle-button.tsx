"use client";
import { sideBarOpenAtom } from "@/atoms";
import clsx from "clsx";
import { useSetAtom } from "jotai";
import { Icon } from "../icon";

export function SideBarToggleButton() {
  const setIsOpen = useSetAtom(sideBarOpenAtom);

  return (
    <button
      className={clsx(
        "p-1 flex justify-center items-center hover:bg-slate-500 hover:rounded-md"
      )}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <Icon icon="sidebar-left" />
    </button>
  );
}
