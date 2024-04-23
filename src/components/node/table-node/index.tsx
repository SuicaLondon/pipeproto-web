"use client";
import { Fragment, memo, useEffect, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";

export type TableConfig = {
  name: string;
  type: string;
};

export type TableNodeData = {
  label: string;
  configs: TableConfig[];
};

export const TableNode = memo(function TableNode({
  data: { label, configs },
}: NodeProps<TableNodeData>) {
  return (
    <div className="rounded-lg border-2 ebg-purple-300 min-w-44 overflow-hidden border-gray-500 dark:text-black">
      <div className="text-lg bg-purple-100 p-2 text-center">{label}</div>
      <div className="border-t-2 border-gray-500">
        {configs.map((config, index) => {
          const isOdd = index % 2 !== 0;
          const bgColor = isOdd ? " bg-purple-100" : " bg-purple-300";
          return (
            <Fragment key={`${label}-${config.name}`}>
              <div className={"grid grid-cols-2" + bgColor}>
                <div className="p-2">{config.name}</div>
                <div className="p-2 border-l-2 border-gray-500">
                  {config.type}
                </div>
              </div>
              <Handle
                id={`${label}-${config.name}-target`}
                type="target"
                position={Position.Left}
                className="w-16 !bg-teal-500"
                style={{
                  top: 44 + 4 + index * 40 + 20,
                }}
              />
              <Handle
                id={`${label}-${config.name}-source`}
                type="source"
                position={Position.Right}
                className="w-16 !bg-teal-500"
                style={{
                  top: 44 + 4 + index * 40 + 20,
                }}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
});
