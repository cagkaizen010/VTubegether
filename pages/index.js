import { Inter } from '@next/font/google'
// import Input from "react-validation/build/input"
import Frame from './components/frame.js'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Frame/>
    </>
  )
}
