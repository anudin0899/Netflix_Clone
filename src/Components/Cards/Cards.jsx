import React from 'react'
import Style from "./index.module.css"
import { Link } from 'react-router-dom'
import { FaPlay, FaStar } from 'react-icons/fa';

const Cards = ({ movie }) => {

    // console.log(movie, "cards");

    return (
        <div className={Style.box}>
            <div className={Style.coverImage}>
                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
            </div>
            <div className={Style.content}>
                <div className={Style.details}>
                    <h1>{movie ? movie.title : null}</h1>

                    <div className={Style.rating}>
                        <label htmlFor="">{movie ? movie.vote_average : null}</label>
                        <span>GP</span>
                        <label htmlFor="">{movie ? movie.time : null}</label>
                    </div>
                    <p>{movie ? movie.overview : null}</p>
                    <button className={Style.primary_btn}> <i> <FaPlay /> </i> PLAY NOW </button>
                </div>
                <div className={Style.playbutton}>
                    <Link to={`/singlepage/${movie ? movie.id : null}`}>
                        <button className={Style.btn}>
                            <div className={Style.imgs}>
                                <i><FaPlay /></i>
                            </div>
                            WATCH TRAILER
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cards