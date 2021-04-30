import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Header } from '../components/header/Header';
import { tvInterface } from '../interface/tvInterface';
import "./DetailPage.scss"

const IMAGE_API =`https://image.tmdb.org/t/p/w500/`



export const TvDetailPage = () => {
    const params: any = useParams();
    const [tv, setTv] = useState<tvInterface>()
    console.log(params)


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTv(data);
            })
    }, [])

    return (
        <>
            <Header></Header>

            {
                tv && (
                    <div className="container" style={{ 
                        backgroundImage: `url("${IMAGE_API}${tv.backdrop_path}")` 
                      }} >
                        <div className="details" >
                            <div className="media-poster">
                                <img src={`${IMAGE_API}${tv.poster_path}`} alt="" />
                            </div>
                            <div className="media-info">
                                <div className="title">{tv.name}</div>
                                <div className="rating"> {tv.vote_average}</div>
                                <div className="runtime">{tv.seasons.length}</div>
                                <div className="overview">{tv.overview}</div>
                            </div>
                        </div>
                        <div className="companies"></div>
                    </div>

                )
            }


        </>
    )
}
