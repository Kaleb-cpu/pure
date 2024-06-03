import React from 'react'

export default function H1({children}) {
  return (
    <>
      <div>
        <h1 className="text-secondary text-xl md:text-2xl lg:text-4xl font-Nunito ml-4 md:ml-10">
          {children}
        </h1>
        
      </div>
    </>
    
  )
}


