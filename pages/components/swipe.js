// Use SSR (Server Side Rendering), dynamically render this page    
//  - people on app will be continuously updated

import {useRouter} from 'next/router'
import Head from 'next/head'

import Frame from './frame.js'
import Person from "./person.js"
import React, { useState } from "react"


export default function Swipe() {

  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <div height="700px">

       <Person/>
      </div>


    </>
  )

}