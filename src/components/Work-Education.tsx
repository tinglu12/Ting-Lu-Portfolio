import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { work, education } from '@/data/work-education'
import React from 'react'
import Timeline from './Timeline'

const WorkEducation = () => {
  return (
    <div className='flex flex-col items-center gap-8 w-full'>
        <Tabs defaultValue="work" className='w-full'>
            <TabsList className='w-full'>
                <TabsTrigger value="work" className='data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-pointer'>Work</TabsTrigger>
                <TabsTrigger value="education" className='data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-pointer'>Education</TabsTrigger>
            </TabsList>
            <TabsContent value="work" className='p-0'>
                <Timeline experience={work} />
            </TabsContent>
            <TabsContent value="education">
                <Timeline experience={education} />
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default WorkEducation