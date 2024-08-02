import React from 'react';

interface DraggableBlockProps {
  id: string;
  children: React.ReactNode;
}

const DraggableBlock: React.FC<DraggableBlockProps> = ({ id, children }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow h-48 flex items-center justify-center">
      {children}
    </div>
  );
};

export default DraggableBlock;
