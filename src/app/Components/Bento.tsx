// app/components/ProjectGrid.tsx
'use client'

import React, { useState } from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
      className={`p-4 bg-white shadow-md rounded-lg ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )
}

const ProjectGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: 'Project 1', description: 'Description for Project 1' },
    { id: 2, title: 'Project 2', description: 'Description for Project 2' },
    { id: 3, title: 'Project 3', description: 'Description for Project 3' },
    { id: 4, title: 'Project 4', description: 'Description for Project 4' },
  ])

  const moveProject = (dragIndex: number, hoverIndex: number) => {
    const draggedProject = projects[dragIndex]
    const newProjects = [...projects]
    newProjects.splice(dragIndex, 1)
    newProjects.splice(hoverIndex, 0, draggedProject)
    setProjects(newProjects)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-2 gap-4 text-black">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={index}
            moveProject={moveProject}
            
          />
        ))}
      </div>
    </DndProvider>
  )
}

export default ProjectGrid