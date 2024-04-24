"use client";
import clsx from "clsx";
import { memo, MouseEventHandler } from "react";
import { Icon, IconProps } from "../icon";
import { Tooltips } from "../tooltips";

export type HoverButtonProps = Pick<IconProps, "icon"> & {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  content?: string;
};

export const HoverButton = memo(function HoverButton({
  icon,
  className,
  onClick,
  content,
}: HoverButtonProps) {
  return (
    <div className={className}>
      <Tooltips content={content}>
        <button
          data-tooltip-target={icon}
          className={clsx(
            "center bg-theme rounded-full border p-1",
            "peer transition-transform hover:scale-110",
          )}
          onClick={onClick}
        >
          <Icon icon={icon} />
        </button>
      </Tooltips>
    </div>
  );
});
