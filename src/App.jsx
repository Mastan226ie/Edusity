import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonals from './Components/Testimonals/Testimonals'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title subtitle = 'Our Programs' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subtitle = 'Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle = 'Testimonals' title='What Student Says'/>
        <Testimonals/>
      </div>
    </div>
  )
}

export default App