import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ProjectItem from '../shared/ProjectItem'
interface Project {
  id: number
  title: string
  description: string
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
      <div className="grid grid-cols-2 gap-4 p-4">
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
