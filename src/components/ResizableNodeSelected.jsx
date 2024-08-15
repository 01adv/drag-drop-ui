import { Handle, NodeResizer, Position } from '@xyflow/react';
import { memo, useState } from 'react';

const ResizableNodeSelected = ({ data, selected, id }) => {
  const [nodeSize, setNodeSize] = useState({ width: 50, height: 30 });
  const [description, setDescription] = useState(data.label.description);


  const handleResize = (newSize) => {
    setNodeSize(newSize);
  };

  // Handler for updating the node's description
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    data.label.description = e.target.value; // Update the data object directly
  };

  return (
    <>
      <NodeResizer
        isVisible={selected}
        minWidth={100}
        minHeight={40}
        lineStyle={{ stroke: '#000', color: 'black' }}
        onResize={handleResize}
        nodeSize={nodeSize}
        color='black'
      />
      <Handle type="target" position={Position.Left} />
      <div
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          background: 'rgba(255, 255, 255, 0.5)',
          height: '100%',
          width: '100%',
        }}
  
      >
        {/* Editable Description Input */}
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          style={{  
            fontSize: `9px`,
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
            resize: 'none',
          }}
          className='no-visible-scrollbar'
        />
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(ResizableNodeSelected);
