import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface DraggableProjectProps {
  project: Project;
}

const DraggableProject: React.FC<DraggableProjectProps> = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={project.imageUrl} alt={project.title} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
};

export default DraggableProject;
