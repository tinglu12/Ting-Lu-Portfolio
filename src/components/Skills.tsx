import React from 'react'

const Skills = () => {
  return (
    <div className="flex flex-col justify-center h-screen w-full gap-4">
        <h2 className="text-4xl font-bold text-primary">Skills</h2>
        <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <h3 className="text-2xl font-bold">Languages</h3>                
            </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <h3 className="text-2xl font-bold">Frameworks</h3>
            </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <h3 className="text-2xl font-bold">Tools</h3>
            </div>
        </div>
    </div>
  )
}

export default Skills