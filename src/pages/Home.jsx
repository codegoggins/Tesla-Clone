import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import SignIn from './SignIn'

const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <Main
        title = "Model Y"
        text = "Schedule a Demo Drive"
        bgImg = "../assets/model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "View Inventory"
         /> */}
         <SignIn/>
         
    </div>
  )
}

export default Home