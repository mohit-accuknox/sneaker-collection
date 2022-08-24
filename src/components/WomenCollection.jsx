import React from 'react'
import {womenDataOne} from '../DummyData'
import {MenWomenSection} from '../components/MenWomenSection'

export const WomenCollection = () => {
  return (
    <div>
        <MenWomenSection title={"Women's Sneaker"} items={womenDataOne}/>
    </div>
  )
}
