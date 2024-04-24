"use client";
import { sideBarOpenAtom } from "@/atoms";
import clsx from "clsx";
import { useSetAtom } from "jotai";
import { Icon } from "../icon";
import { memo } from "react";

export const SideBarToggleButton = memo(function SideBarToggleButton() {
  const setIsOpen = useSetAtom(sideBarOpenAtom);

  return (
    <button
      className={clsx(
        "flex items-center justify-center p-1",
        "hover:rounded-md hover:bg-slate-300 dark:hover:bg-slate-500",
      )}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <Icon icon="sidebar-left" />
    </button>
  );
});
