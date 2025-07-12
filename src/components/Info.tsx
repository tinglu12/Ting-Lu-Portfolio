import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Mail, File, Github, Linkedin } from 'lucide-react'
import { email, github, linkedin } from '@/data/info'


const Info = () => {
  return (
    <section className="flex flex-row justify-between items-start w-full gap-8">
        <div className="flex flex-col justify-start gap-4">
            <h1 className="text-6xl font-bold text-primary">
                Ting Lu
            </h1>            
            <h2 className="text-[1.4rem] font-bold text-muted-foreground">
                Full Stack Dev | Software Engineer | Ocean Enjoyer
            </h2>
            <div className="flex flex-row items-center gap-4">

                <Button className="flex flex-row items-center justify-center gap-2 w-fit " asChild>
                    <a href="/Ting-Lu-Resume.pdf" download>
                        <File className="w-4 h-4" />
                        <span>Resume</span>
                    </a>
                </Button>
                <Button variant="outline" className="flex flex-row items-center justify-center gap-2 w-fit text-accent hover:text-white" asChild>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                    </a>
                </Button>
                <Button variant="outline" className="flex flex-row items-center justify-center gap-2 w-fit text-accent hover:text-white" asChild>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                    </a>
                </Button>
                <Button variant="outline" className="flex flex-row items-center justify-center gap-2 w-fit text-accent hover:text-white" asChild>
                    <a href={`mailto:${email}`} >
                        <Mail className="w-4 h-4" />
                    </a>
                </Button>                
            </div>
        </div>
        <div className="flex flex-row items-center justify-center">
            <Image src="/Ting-Lu.jpg" alt="Ting Lu" width={200} height={200} className="rounded-sm overflow-hidden" />
        </div>
    </section>
  )
}

export default Info