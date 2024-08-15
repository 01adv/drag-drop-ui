import React, { useRef, useCallback } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  Background,
  BackgroundVariant,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import Sidebar from "./Sidebar";
import { DnDProvider, useDnD } from "./DnDContext";

import "./index.css";
import ResizableNodeSelected from "../ResizableNodeSelected"; // Updated import

const nodeTypes = { ResizableNodeSelected };

const initialNodes = [
  {
    id: "1",
    type: "ResizableNodeSelected",
    data: {
      label: {
        description: "Default Resizable, Editable card",
      },
    },
    position: { x: 250, y: 5 },
    style: {
      border: "1px solid black",
      borderRadius: 2,
      padding: 5,
      height: 50,
    },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type, setType] = useDnD();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type: "ResizableNodeSelected",
        position,
        data: {
          label: {
            description: type.data.description || "Default Description",
          },
        },

        style: {
          background: "#fff",
          border: "1px solid black",
          borderRadius: 2,
          padding: 5,
          height: 50,
        },
      };

      setNodes((nds) => nds.concat(newNode));
      setType(null);
    },
    [screenToFlowPosition, type, setType]
  );

  return (
    <div className="dndflow">
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          nodeTypes={nodeTypes}
          
        >
          <Background variant={BackgroundVariant.Dots} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      <Sidebar />
    </div>
  );
};

export const DragMain = () => (
  <ReactFlowProvider>
    <DnDProvider>
      <DnDFlow />
    </DnDProvider>
  </ReactFlowProvider>
);
