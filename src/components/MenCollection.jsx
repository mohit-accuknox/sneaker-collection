import React from 'react'
import {MenDataOne} from "../DummyData"
import {MenWomenSection} from '../components/MenWomenSection'

export const MenCollection = () => {
  return (
    <div>
      <MenWomenSection title={"Men's Sneaker"} items={MenDataOne}/>
    </div>
  )
}

