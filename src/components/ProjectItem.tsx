import React from 'react'
import { Badge } from './ui/badge'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { Github, Globe } from 'lucide-react'
type Project = {
    name: string;
    description: string;
    img: string;
    tech: string[];
    website?: string;
    github?: string;
}
const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>
          <div className='flex flex-col gap-2'>
            <a href={project.website} target='_blank' rel='noopener noreferrer'>
              <Image src={project.img} alt={project.name} width={600} height={350} className='rounded-md max-h-[150px] w-full object-cover' />
            </a>
            <h3 className='text-2xl font-bold text-primary'>{project.name}</h3>
            <p className='text-sm text-muted-foreground'>{project.description}</p>
          </div>

        </CardTitle>
      </CardHeader>
      <CardContent className='h-full'>
        <div className='flex flex-row gap-2 flex-wrap'>
            {project.tech.map((tech: string) => (
                <Badge key={tech} className='bg-primary/10 text-primary'>{tech}</Badge>
            ))}
        </div>
      </CardContent>
      <CardFooter className='flex flex-row gap-2'>
          {project.website && (
            <Button variant="outline" className='flex flex-row items-center justify-center gap-2 w-fit' asChild>
                <Link href={project.website}>
                    <Globe className='w-4 h-4' />
                    <span>Website</span>
                </Link>
            </Button>
          )}
          {project.github && (
            <Button variant="outline" className='flex flex-row items-center justify-center gap-2 w-fit' asChild>
                <Link href={project.github}>
                    <Github className='w-4 h-4' />
                    <span>GitHub</span>
                </Link>
            </Button>
          )}
      </CardFooter>
    </Card>
  )
};

export default ProjectItem;