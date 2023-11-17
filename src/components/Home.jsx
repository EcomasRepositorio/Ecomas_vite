import React from 'react'
import { Header } from './navigations/Header'
import HomeContend from './index/HomeContend'
import Footer from './navigations/Footer'

const Home = () => (
  <section className="Home">
    <div className=''>
      <Header/>
      <HomeContend/>
      <Footer/>
    </div>
  </section>
)

export default Home