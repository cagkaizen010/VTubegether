// Use SSR (Server Side Rendering), dynamically render this page    
//  - people on app will be continuously updated

import {useRouter} from 'next/router'
import Head from 'next/head'

import Image from 'next/image'
import Frame from './frame.js'
import React, { useState } from "react"


export default function Swipe() {

    const router = useRouter()
    const {id} = router.query

    // const [rotate, setRotate] = useState<boolean>(false);
    // rotate ? document.body.style.overflow = "Hidden": document.body.style.overflow = "auto"

    return (<>
        <Head>
            <title>Swipe Page</title>
        </Head>
        
        <h1>VTubegether Swipe Page</h1>
        <h2>Dear God how do we do this Swipe page</h2>

        <Frame>

        </Frame>
        
    </>)

}