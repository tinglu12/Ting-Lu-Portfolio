import React from 'react'
import { Badge } from './ui/badge'
import Image from 'next/image'

const ProjectItem = ({ project }: { project: any }) => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <Image src={project.img} alt={project.name} width={100} height={100} />
        <h3 className='text-2xl font-bold'>{project.name}</h3>
        <p className='text-sm text-muted-foreground'>{project.description}</p>
        <div className='flex flex-row gap-2'>
            {project.tech.map((tech: any) => (
                <Badge key={tech}>{tech}</Badge>
            ))}
        </div>
    </div>
  )
}

export default ProjectItem  