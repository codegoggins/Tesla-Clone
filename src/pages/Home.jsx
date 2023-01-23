import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Register from './Register'
import SignIn from './SignIn'

const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <Main
        title = "Model Y"
        text = "Schedule a Demo Drive"
        bgImg = "../assets/model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "View Inventory"
         />
        <Main
        title = "Model X"
        text = "Schedule a Demo Drive"
        bgImg = "../assets/model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "View Inventory"
         />
        <Main
        title = "Model S"
        text = "Schedule a Demo Drive"
        bgImg = "../assets/model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "View Inventory"
         /> */}
         {/* <SignIn/> */} 
         <Register/>
    </div>
  )
}

export default Home