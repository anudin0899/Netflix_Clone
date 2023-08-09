import React, { useState } from 'react'
import Style from "./index.module.css"
import Header from '../../Components/Header/Header'
import Homes from '../../Components/Homes/Homes'
import Upcomming from '../../Components/Upcomming/Upcomming'
import Trending from '../../Components/Trending/Trending'
import Footer from '../../Components/Footer/Footer'
import requests from "../../requests";

const Home = () => {



  return (
    <div className={Style.home} >
      <Header />
      <Homes fetchUrl={requests.fetchTrending} />
      <div className={Style.margin}>
        <Upcomming fetchUrl={requests.fetchActionMovies} title='Action Movies' />
        <Upcomming fetchUrl={requests.fetchComedyMovies} title='Comedy Movies' />
        <Upcomming fetchUrl={requests.fetchNetflixOriginals} title='Upcomming Movies' />
        <Trending fetchUrl={requests.fetchTopRated} />
        <Upcomming fetchUrl={requests.fetchHorrorMovies} title='Horror Movies' />
        <Upcomming fetchUrl={requests.fetchRomanceMovies} title='Romance Movies' />
      </div>
      <Footer />
    </div>
  )
}

export default Home