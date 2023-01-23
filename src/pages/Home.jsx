import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Register from './Register'
import SignIn from './SignIn'
import ModelY from '../assets/model-y.jpg'
import Model3 from '../assets/model-3.jpg'
import ModelS from '../assets/model-s.jpg'
import ModelX from '../assets/model-x.jpg'
import SolarPanel from '../assets/solar-panel.jpg'
import SolarRoof from '../assets/solar-roof.jpg'
import Acc from '../assets/accessories.jpg'
import Footer from '../components/Footer'

import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Main
        title = "Model Y"
        text = "Schedule a Demo Drive"
        bgImg = {ModelY}
        leftBtnText = "Custom Order"
        rightBtnText = "View Inventory"
         />
        <Main
        title = "Model 3"
        text = "Schedule a Demo Drive"
        bgImg = {Model3}
        leftBtnText = "Custom Order"
        rightBtnText = "View Inventory"
         />
        <Main
        title = "Model S"
        text = "Schedule a Demo Drive"
        bgImg = {ModelS}
        leftBtnText = "Custom Order"
        rightBtnText = "View Inventory"
         />
        <Main
        title = "Model X"
        text = "Schedule a Demo Drive"
        bgImg = {ModelX}
        leftBtnText = "Custom Order"
        rightBtnText = "View Inventory"
         />
        <Main
        title = "Solar Panels"
        text = "Lowest Cost Solar Panels in America"
        bgImg = {SolarPanel}
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
         />
        <Main
        title = "Solar Roof"
        text = "Produce Clean Energy From Your Roof"
        bgImg = {SolarRoof}
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
         />
        <Main
        title = "Accessories"
        text = ""
        bgImg = {Acc}
        BtnText = "Shop Now"
         />
    </div>
  )
}

export default Home