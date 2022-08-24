import React from 'react'
import {SneakerSection} from '../components/SneakerSection'
import {sectionOneItems,sectionTwoItems,sectionThreeItems,sectionFourItems,MenDataOne,womenDataOne} from '../DummyData'


export const CollectionSection = () => {
    console.log(sectionOneItems)
  return (
    <div>
        <SneakerSection title={"Jordans"} items={sectionOneItems}/>
        <SneakerSection title={"Authentic Sneaker"} items={sectionTwoItems}/>
        <SneakerSection title={"Canvas Sneaker"} items={sectionThreeItems}/>
        <SneakerSection title={"LED Sneaker"} items={sectionFourItems}/>  
    </div>
  )
}
