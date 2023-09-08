// Use SSR (Server Side Rendering), dynamically render this page    
//  - people on app will be continuously updated

import {useRouter} from 'next/router'
import Head from 'next/head'

import Frame from './frame.js'
import {Carousel} from 'react-bootstrap'
import React, { useState } from "react"


export default function Swipe() {



    return (<>

        <Head>
            <title>Swipe Page</title>
        </Head>

        <Carousel>
            <Carousel.Item interval={9999}>
                <img
                    className="d-block w-100"
                    src="https://as1.ftcdn.net/v2/jpg/01/41/12/10/1000_F_141121004_IpVWZBqHwvqIrMhJcohvDCM0D7S1NqkW.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item interval={9999}>
                <img
                  className="d-block w-100"
                  src="https://i.stack.imgur.com/VJBJq.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={9999}>
              <img
                className="d-block w-100"
                src="https://as1.ftcdn.net/v2/jpg/01/41/11/64/1000_F_141116428_V5guspEHFFY0a9VvpEiC0QUHDbYyoDD9.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 
        


        
    </>)

}