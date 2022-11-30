import React from 'react'
import CoursesList from '../components/CoursesList'

function Home() {
  return (

    <>
    <div className="container">
      <img src="https://files.adventistas.org/apocalipsis.org/2019/01/banner_desktop-640x360.jpg" alt="" width="100%"/>
      <h1 className='text-center'>Bienvenido a la mejor plataforma de Enseñanza del Apocalipsis!</h1>
    </div>
    <CoursesList/>
    </>
  )
}

export default Home