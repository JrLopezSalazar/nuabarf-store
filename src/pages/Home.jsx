import React from 'react'
import NavBar from '../components/NavBar'
import AboutBarf from '../components/AboutBarf'
import Calculator from '../components/Calculator'
import Menu from '../components/Menu'
import HomeCalculator from '../components/HomeCalculator'
import Footer from '../components/Footer'
import ImagePortada from '../components/ImagePortada'



const Home = () => {


  return (
    <>
    {/* <NavBar/> */}
    <ImagePortada/>
    <AboutBarf />
    <Menu  />
    <HomeCalculator/>
    {/* <Calculator/> */}
    <Footer/>

    </>
  )
}

export default Home