import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  picture: string
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
      className={`mb-4 rounded-[20px] p-4 flex flex-col cursor-pointer transition-transform duration-500 ease-out transform ${
        isDragging ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      } group relative`}
      style={{
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        visibility: isDragging ? 'hidden' : 'visible', // Hide the item while dragging
      }}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,28,50,0.8)0%,rgba(43,22,29,0.7)100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out rounded-[20px]"
        style={{ transition: 'opacity 0.4s ease-in-out' }}
      />
      <div className="relative z-10">
        <Image
          src={project.picture}
          alt={project.title}
          width={500} // Adjust width as needed
          height={500} // Set the desired height
          className="rounded-[] object-cover"
        />
        <div className='mt-[6px] font-normal tracking-tighter'>
          <h3 className="text-[16px] font-bold">{project.title}</h3>
          <p className='opacity-60'>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
