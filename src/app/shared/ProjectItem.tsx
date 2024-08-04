import React from 'react'
import { useDrag, useDrop } from 'react-dnd'

interface Project {
  id: number
  title: string
  description: string
}

const ProjectItem: React.FC<{
  project: Project
  index: number
  moveProject: (dragIndex: number, hoverIndex: number) => void
}> = ({ project, index, moveProject }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'project',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, drop] = useDrop({
    accept: 'project',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveProject(item.index, index)
        item.index = index
      }
    },
  })

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`p-4 shadow-md rounded-lg transition-opacity duration-300 ease-in-out transform ${
        isDragging ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundColor: isDragging ? '' : 'white',
        border: isDragging ? '' : 'none',
      }}
    >
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectItem
