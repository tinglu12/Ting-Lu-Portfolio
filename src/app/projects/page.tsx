import ProjectItem from '@/components/ProjectItem'
import { projects } from '@/data/projects'
import React from 'react'

const ProjectsPage = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <h2 className='text-4xl font-bold text-primary'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {projects.map((project) => (
                <ProjectItem key={project.name} project={project} />
            ))}
        </div>
    </div>
  )
}

export default ProjectsPage 