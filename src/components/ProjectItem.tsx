import React from 'react'
import { Badge } from './ui/badge'
import Image from 'next/image'

type Project = {
    name: string;
    description: string;
    img: string;
    tech: string[];
    website: string;
    github: string;
}
const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <Image src={project.img} alt={project.name} width={100} height={100} />
        <h3 className='text-2xl font-bold'>{project.name}</h3>
        <p className='text-sm text-muted-foreground'>{project.description}</p>
        <div className='flex flex-row gap-2'>
            {project.tech.map((tech: string) => (
                <Badge key={tech}>{tech}</Badge>
            ))}
        </div>
    </div>
  )
}

export default ProjectItem  