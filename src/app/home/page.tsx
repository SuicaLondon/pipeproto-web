import { TableNode } from "@/components";
import TableDiagram from "@/components/diagram/table-diagram";
import { tables } from "@/data";
import { convertTableToEdges } from "@/utils";
import React from "react";
import { useEdgesState, useNodesState } from "reactflow";

const nodeTypes = { table: TableNode };
const initialNodes: Parameters<typeof useNodesState>[0] = tables.map(
  (table, index) => {
    console.log(table.name);
    return {
      id: table.name,
      position: {
        x: index * 100 * table.columns.length,
        y: index * 100 * table.columns.length,
      },
      data: {
        label: table.name,
        configs: table.columns,
      },
      type: "table",
    };
  }
);

const initialEdges: Parameters<typeof useEdgesState>[0] =
  convertTableToEdges(tables);

export default function HomePage() {
  return (
    <TableDiagram
      initialNodes={initialNodes}
      initialEdges={initialEdges}
      nodeTypes={nodeTypes}
    />
  );
}
