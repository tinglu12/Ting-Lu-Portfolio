import Link from 'next/link'
import React from 'react'


const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Projects",
        href: "/projects",
    },

]

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full py-4 sticky top-0 bg-background z-10 backdrop-blur-sm'>
        <div className='flex flex-row items-center gap-4'>
            {links.map((link) => (
                <Link href={link.href} key={link.name} className='text-md text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer'>
                    {link.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Header   