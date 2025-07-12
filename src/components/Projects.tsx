import React from 'react'
import ProjectItem from './ProjectItem'
import { projects } from '@/data/projects'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Projects = () => {
  return (
    <section className='flex flex-col gap-8 w-full'>
        <div className='flex flex-row justify-between items-center'>
            <h2 className='text-4xl font-bold text-primary'>Projects</h2>
            <div className='flex flex-row gap-2'>
              <Link href='/projects' className='flex flex-row items-center justify-center gap-2 w-fit'>
                <span>View more</span>
                <ArrowRight className='w-4 h-4' />
              </Link>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
            {projects.slice(0, 2).map((project) => (
                <ProjectItem key={project.name} project={project} />
            ))}
        </div>
    </section>
  )
}

export default Projects