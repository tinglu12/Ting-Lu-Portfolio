import React from 'react'
import { Badge } from './ui/badge'
import { skills } from '@/data/work-education'


const Skills = () => {

    return (
    <section className="flex flex-col justify-center w-full gap-4">
        <h2 className="text-4xl font-bold text-primary">Skills</h2>
        <div className="flex flex-row flex-wrap gap-4">
            {skills.map((skill) => (
                <Badge key={skill} className='bg-primary text-white px-4 py-2 text-sm'>{skill}</Badge>
            ))}
        </div>
    </section>
  )
}

export default Skills