import { Github, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-center items-center w-full p-4 gap-4'>
        <p className='text-sm text-muted-foreground'>© 2025 Ting Lu. All rights reserved.</p>
        <div className='flex flex-row gap-2'>
            <a href='https://github.com/tinglu12' target='_blank' rel='noopener noreferrer'>
                <Github className='w-4 h-4' />
            </a>
            <a href='https://www.linkedin.com/in/ting-lu-0000000000/' target='_blank' rel='noopener noreferrer'>
                <Linkedin className='w-4 h-4' />
            </a>
        </div>
    </div>
  )
}

export default Footer