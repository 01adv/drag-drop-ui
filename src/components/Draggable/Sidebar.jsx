import React, { useState } from 'react';
import { useDnD } from './DnDContext';

export default () => {
  const [_, setType] = useDnD();
//   const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  
  const onDragStart = (event, nodeType, nodeData) => {
    setType({ type: nodeType, data: nodeData });
    event.dataTransfer.effectAllowed = 'move';
    setInputDescription("")
  };

  return (
    <aside className="p-4 bg-gray-100">
      <div className="mb-4 text-gray-700">You can drag the card to the pane.</div>

      {/* Input Node */}
      <div className="mb-4">
        <textarea
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
          className="block w-full p-2 mb-2 border border-gray-300 rounded"
          placeholder="Input Node Description"
        />
        <div 
          className="p-2 bg-blue-500 text-white rounded cursor-pointer"
          onDragStart={(event) => onDragStart(event, 'input', { description: inputDescription })} 
          draggable
        >
          Drag Card to Canvas
        </div>
      </div>

      
    </aside>
  );
};

