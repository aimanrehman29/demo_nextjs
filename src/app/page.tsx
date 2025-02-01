import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import CarGallery from './components/CarGallery'
import Frame2 from './components/hero'
import CommentsSection from './components/comentsection'

const page = () => {
  return (
    <div>
      <Navbar/>
      <CarGallery/> 
      <Frame2/>
      <CommentsSection/>
      <Footer/>
    </div>
  )
}

export default page
