import React from 'react'

export default function H1({children}) {
  return (
    <>
      <div>
        <h1 className="text-secondary text-2xl md:text-3xl lg:text-4xl font-Nunito">
          {children}
        </h1>
        
      </div>
    </>
    
  )
}


