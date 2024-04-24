import React from "react";
import { AddButton } from "./add-button";
import TableButton from "./table-button";
import clsx from "clsx";

export function ManageButtonGroup() {
  return (
    <div
      className={clsx(
        "group/manage-button fixed bottom-4 right-4",
        "flex items-end justify-end",
        "hover:h-20 hover:w-20",
      )}
    >
      <TableButton
        content="Manage table button"
        className={clsx(
          "absolute -z-10 translate-x-0 translate-y-0 opacity-0 transition-all",
          "group-hover/manage-button:-translate-x-8 group-hover/manage-button:-translate-y-8 group-hover/manage-button:opacity-100",
        )}
      />
      <AddButton content="Add new table" className="Add new table" />
    </div>
  );
}
