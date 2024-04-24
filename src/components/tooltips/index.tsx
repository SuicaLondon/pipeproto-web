import clsx from "clsx";
import React, { ReactNode } from "react";
type TooltipsProps = {
  content?: string;
  children: ReactNode;
};

export function Tooltips({ children, content }: TooltipsProps) {
  return (
    <div className="group relative">
      {children}
      {!!content && (
        <div
          className={clsx(
            "min-w-24 max-w-52 px-2 py-1",
            "absolute bottom-[110%] right-0 hidden rounded-md bg-gray-900 opacity-70",
            "group-hover:block",
          )}
        >
          <p className="text-xs text-white">{content}</p>
        </div>
      )}
    </div>
  );
}
