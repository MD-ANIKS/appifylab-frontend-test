import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import { ScrollRestoration } from "react-router-dom";

export default function App() {  

  return (
    <>

      <Header/>
      <Outlet/>
      <Footer/>
      <ScrollRestoration />
      
    </>
  )
}
