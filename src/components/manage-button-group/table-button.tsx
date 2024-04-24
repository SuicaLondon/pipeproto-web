"use client";
import { tableManagementModalOpenAtom } from "@/atoms";
import { useSetAtom } from "jotai";
import { HoverButton, HoverButtonProps } from "./hover-button";

type TableButtonProps = Pick<HoverButtonProps, "className" | "content">;

export default function TableButton({ className, content }: TableButtonProps) {
  const setIsOpen = useSetAtom(tableManagementModalOpenAtom);
  return (
    <HoverButton
      icon={"table"}
      className={className}
      content={content}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    />
  );
}
