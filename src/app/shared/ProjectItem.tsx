import React, { useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

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
  const ref = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const [{ isDragging }, drag] = useDrag({
    type: 'project',
    item: () => ({ id: project.id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, drop] = useDrop({
    accept: 'project',
    hover: (item: { id: number, index: number }, monitor) => {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveProject(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  drag(drop(ref))

  return (
    <AnimatePresence>
      {isDragging ? (
        <motion.div
          initial={{ opacity: 1, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 1, height: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-4 cursor-pointer rounded-[20px] bg-gray-200 dark:bg-gray-700"
          style={{ height: ref.current?.offsetHeight }}
        />
      ) : (
        <motion.div
          ref={ref}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="mb-4 cursor-pointer rounded-[20px] p-4 flex flex-col group relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,28,50,0.8)0%,rgba(43,22,29,0.7)100%)] opacity-0 group-hover:opacity-100 rounded-[20px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <div className="relative z-10">
            <Image
              src={project.picture}
              alt={project.title}
              width={500}
              height={500}
              className="object-cover mb-[15px] w-full h-auto"
            />
            <motion.div
              className='mt-[6px] font-normal tracking-tighter'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <h3 className="text-[14px] mb-1 font-bold">{project.title}</h3>
              <p className='opacity-60 font-light text-[14px]'>{project.description}</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectItem