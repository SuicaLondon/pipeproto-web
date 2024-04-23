"use client";
import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  NodeResizer,
  NodeToolbar,
  NodeTypes,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

type TableDiagramProps = {
  initialNodes: Parameters<typeof useNodesState>[0];
  initialEdges: Parameters<typeof useEdgesState>[0];
  nodeTypes: NodeTypes;
};

export default function TableDiagram({
  initialNodes,
  initialEdges,
  nodeTypes,
}: TableDiagramProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Controls />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      <NodeToolbar />
      <NodeResizer />
    </ReactFlow>
  );
}
