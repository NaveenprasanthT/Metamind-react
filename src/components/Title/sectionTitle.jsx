import React from 'react'
import './sectionTitle.css'

const SectionTitle = ({title}) => {
  return (
    <div>
        <h1 className='sectionTile'>{title}</h1>
    </div>
  )
}

export default SectionTitle