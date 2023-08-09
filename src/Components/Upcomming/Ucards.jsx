import React from 'react'
import Style from "./index.module.css"
import { FaPlay, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Ucards = ({ movie }) => {
    return (
        <div className={Style.movieBox}>
            <div className={Style.Image}>
                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
            </div>
            <div className={Style.text}>
                <h3>{movie ? movie.title : null}</h3>
                <Link to={`/singlepage/${movie ? movie.id : null}`}>
                    <button className={Style.primary_btn}>
                        <i> <FaPlay /> </i> PLAY NOW
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Ucards