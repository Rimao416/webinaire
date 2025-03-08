import React from 'react'
import "../styles/MainLayouts.css"

function MainLayouts({children}) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default MainLayouts
