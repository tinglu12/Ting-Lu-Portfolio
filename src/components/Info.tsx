import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Mail, File, Github, Linkedin } from 'lucide-react'


const Info = () => {
  return (
    <div className="flex flex-row justify-between items-start w-full gap-8">
        <div className="flex flex-col justify-start gap-4">
            <h1 className="text-6xl font-bold text-primary">
                Ting Lu
            </h1>            
            <h2 className="text-2xl font-bold text-muted-foreground">
                Full Stack Developer | Software Engineer | Ocean Enjoyer
            </h2>
            <div className="flex flex-row items-center gap-4">

                <Button className="flex flex-row items-center justify-center gap-2 w-fit" asChild>
                    <a href="/Ting-Lu-Resume.pdf" download>
                        <File className="w-4 h-4" />
                        <span>Resume</span>
                    </a>
                </Button>
                <Button variant="outline" className="flex flex-row items-center justify-center gap-2 w-fit" asChild>
                    <a href="https://github.com/tinglu12" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                    </a>
                </Button>
                <Button variant="outline" className="flex flex-row items-center justify-center gap-2 w-fit" asChild>
                    <a href="https://www.linkedin.com/in/tingxlu/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                    </a>
                </Button>
                <Button variant="outline" className="flex flex-row items-center justify-center gap-2 w-fit" asChild>
                    <a href="mailto:tinglu@gmail.com" >
                        <Mail className="w-4 h-4" />
                    </a>
                </Button>                
            </div>
        </div>
        <div className="flex flex-row items-center justify-center">
            <Image src="/Ting-Lu.jpg" alt="Ting Lu" width={200} height={200} className="rounded-sm overflow-hidden" />
        </div>
    </div>
  )
}

export default Info