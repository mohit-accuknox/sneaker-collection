import React from 'react'
import '../styles/Banner.css'

const Banner = (props) => {
  return (
    <div>
        <div className="containerBanner">
            <h1 className="titleBanner">#{props.title}</h1>
            <p className="infoText">Best Selling Sneakers All Around the World</p>
        </div>
    </div>
  )
}

export default Banner
