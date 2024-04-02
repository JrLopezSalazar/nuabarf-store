import React from 'react'
import NavBar from '../components/NavBar'
import AboutBarf from '../components/AboutBarf'
import Calculator from '../components/Calculator'
import Menu from '../components/Menu'
import HomeCalculator from '../components/HomeCalculator'


const Home = () => {
  return (
    <>
    <NavBar/>
    <AboutBarf />
    <Menu/>
    <HomeCalculator/>
    <Calculator/>

    </>
  )
}

export default Home