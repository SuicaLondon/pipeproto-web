import { ITable } from "@/types";
import { useEdgesState } from "reactflow";

export const convertTableToEdges = (
  tables: ITable[]
): Parameters<typeof useEdgesState>[0] => {
  const edges: Parameters<typeof useEdgesState>[0] = [];
  for (let i = 0; i < tables.length; i++) {
    const table = tables[i];
    for (let j = 0; j < table.columns.length; j++) {
      const column = table.columns[j];
      if (column.reference) {
        edges.push({
          id: `${column.reference.table}-${table.name}`,
          source: column.reference.table,
          sourceHandle: `${column.reference.table}-${column.name}-source`,
          target: table.name,
          targetHandle: `${table.name}-${column.name}-target`,
          label: "relation",
          type: "step",
        });
      }
    }
  }
  return edges;
};
