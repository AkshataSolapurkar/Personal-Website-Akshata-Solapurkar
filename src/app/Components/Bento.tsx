import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ProjectItem from '../shared/ProjectItem'

interface Project {
  id: number
  title: string
  description: string
  picture: string
}

const ProjectGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: 'Leadlly Website', description: 'Fully responsive UI design for Leadlly first version website.', picture: '/leadllywebsite.png' },
    { id: 2, title: 'Payout Dashboard', description: 'A sleek, fully responsive UI for managing and visualizing payout transactions efficiently.', picture: '/PayoutDadboard.png' },
    { id: 3, title: 'CopperX Website', description: 'A fully responsive UI design showcasing CopperX’s brand identity and features.', picture: '/copperx.jpg' },
    { id: 4, title: 'Image Generator', description: 'AI-powered image generator using OpenAI SDK for creative outputs.', picture: '/ImageGenerator.png' },
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
      <div className="flex flex-wrap -mx-4">
        {projects.map((project, index) => (
          <div key={project.id} className="w-full md:w-1/2 ">
            <ProjectItem
              project={project}
              index={index}
              moveProject={moveProject}
            />
          </div>
        ))}
      </div>
    </DndProvider>
  )
}

export default ProjectGrid
