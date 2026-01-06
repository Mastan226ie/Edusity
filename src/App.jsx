import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title subtitle = 'Our Programs' title='What We Offer'/>
        <Programs/>
      </div>
    </div>
  )
}

export default App