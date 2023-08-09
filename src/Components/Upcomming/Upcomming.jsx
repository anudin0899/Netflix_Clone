import React, { useEffect, useState } from 'react'
import Style from "./index.module.css"
import Ucards from './Ucards'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "../../Instance/AuthInstance"


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className={Style.control_btn} onClick={onClick}>
      <button className={Style.next}>
        <i> <IoIosArrowForward /> </i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className={Style.control_btn} onClick={onClick}>
      <button className={Style.prev}>
        <i> <IoIosArrowBack /> </i>
      </button>
    </div>
  )
}

const Upcomming = ({  title, fetchUrl }) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((Response) => {
      // console.log(Response.data);
      setMovies(Response.data.results)
    })

  }, [fetchUrl])


  // console.log(movies, "upcoming");

  const settings = {
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
    ],
  }

  return (
    <div className={Style.upcome}>
      <div className={Style.container}>
        <div className={Style.heading}>
          <h1>{title}</h1>
          <Link to='/'><p>View All</p></Link>
        </div>
        <div className={Style.content}>
          <Slider {...settings}>
            {movies.map((item, index) => {
              return (
                <Ucards key={index} movie={item} />
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Upcomming