"use client";
import { addTableModalOpenAtom } from "@/atoms";
import { useSetAtom } from "jotai";
import { memo } from "react";
import { HoverButton, HoverButtonProps } from "./hover-button";

type AddButtonProps = Pick<HoverButtonProps, "className" | "content">;

export const AddButton = memo(function AddButton({
  className,
  content,
}: AddButtonProps) {
  const setIsOpen = useSetAtom(addTableModalOpenAtom);

  return (
    <HoverButton
      icon={"plus"}
      className={className}
      content={content}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    />
  );
});
