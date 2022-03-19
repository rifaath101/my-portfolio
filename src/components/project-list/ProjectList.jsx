import './ProjectList.css'
import React from 'react'
import Project from '../projects/Project'
import { projects } from '../../data'

const ProjectList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-texts'>My Most Recent Projects</h1>
      </div>
      <div className='pl-list'>
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
