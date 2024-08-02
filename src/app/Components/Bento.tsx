import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const DragDropContext = dynamic(() => import('react-beautiful-dnd').then(mod => mod.DragDropContext), { ssr: false });
const Droppable = dynamic(() => import('react-beautiful-dnd').then(mod => mod.Droppable), { ssr: false });
const Draggable = dynamic(() => import('react-beautiful-dnd').then(mod => mod.Draggable), { ssr: false });

const ProjectGrid = ({ initialProjects }:any) => {
  const [projects, setProjects] = useState(initialProjects);

  const onDragEnd = (result:any) => {
    if (!result.destination) return;

    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProjects(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="projects">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="grid grid-cols-2 gap-4 p-4"
          >
            {projects.map(({project, index}:any) => (
              <Draggable key={project.id} draggableId={project.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white rounded-lg shadow-md p-4"
                  >
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ProjectGrid;