import React from 'react'

export default function H2({children}) {
  return (
    <>
      <div>
        <h2 className="text-teritary text-lg md:text-xl lg:text-2xl font-Nunito ml-4 md:ml-10">
          {children}
        </h2>
        
      </div>
    </>
    
  )
}

