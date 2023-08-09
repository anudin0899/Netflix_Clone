import React, { useEffect, useState } from 'react'
import Style from "./index.module.css"
import Single from '../../Components/Single/Single'
// import { homeData, recommended } from "../../dummyData"
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from "../../Instance/AuthInstance"

const SinglePage = () => {

    const { id } = useParams()
    console.log(id, "single");
    const [Items, SetItems] = useState(null)
    const [urlId, setUrlId] = useState('')


    useEffect(() => {
        axios.get(`/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(Response => {
            console.log(Response.data);
            if (Response.data.results.length !== 0) {
                setUrlId(Response.data.results[0])
            } else {
                console.log('Array empty');
            }
        })
        // let item = homeData.find((item) => item.id === parseInt(id))
        // if (item) {
        //     SetItems(item)
        // }
    }, [id])


    return (
        <div className={Style.home}>
            <Header />
            <Single item={urlId} />
            <Footer />
        </div>
    )
}

export default SinglePage