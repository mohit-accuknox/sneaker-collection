import React from 'react'
import {SneakerSection} from '../components/SneakerSection'
import {sectionOneItems,sectionTwoItems,sectionThreeItems,sectionFourItems} from '../DummyData'


export const CollectionSection = () => {
    console.log(sectionOneItems)
  return (
    <div>
        <SneakerSection title={"Jordans"} items={sectionOneItems}/>
        <SneakerSection title={"Authentic Sneaker"} items={sectionTwoItems}/>
        <SneakerSection title={"Canvas Sneaker"} items={sectionThreeItems}/>
        <SneakerSection title={"Lead Sneaker"} items={sectionFourItems}/>
    </div>
  )
}
