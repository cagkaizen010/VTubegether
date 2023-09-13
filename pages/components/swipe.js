// Use SSR (Server Side Rendering), dynamically render this page    
//  - people on app will be continuously updated

import {useRouter} from 'next/router'
import Head from 'next/head'

import Frame from './frame.js'
import {Carousel} from 'react-bootstrap'
import React, { useState } from "react"


export default function Swipe() {


  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }


    return (<>

        <Head>
            <title>Swipe Page</title>
        </Head>

        <Carousel slide={false} data-bs-touch="true" interval={null} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/media/FYb32DnaAAA3mq5?format=jpg&name=900x900"
                    alt="First slide"
                    height="700px"
                    object-fit="cover"
                    overflow="visible"
                />
                <Carousel.Caption>
                    <h3>Yanapii</h3>
                    <p>Green Cozy cat looking to make friends.</p>
                </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item interval={null}>
                <img
                  className="d-block w-100"
                  src="https://i.stack.imgur.com/VJBJq.png"
                  alt="Second slide"
                  height="700px"
                />
                <Carousel.Caption>
                  <h3>Yanapii</h3>
                  <p>Green Cozy cat looking to make friends.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
              <img
                className="d-block w-100"
                src="https://as1.ftcdn.net/v2/jpg/01/41/11/64/1000_F_141116428_V5guspEHFFY0a9VvpEiC0QUHDbYyoDD9.jpg"
                alt="Third slide"
                height="700px"
              />
              <Carousel.Caption >
                <h3>Yanapii</h3>
                <p>Green Cozy cat looking to make friends.</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 
        


        
    </>)

}