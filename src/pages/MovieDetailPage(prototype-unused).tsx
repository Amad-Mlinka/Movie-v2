import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom"
import { Header } from '../components/header/Header';
import { movieInterface } from '../interface/movieInterface';
import "./DetailPage.scss"

const IMAGE_API = `https://image.tmdb.org/t/p/w500/`



export const MovieDetailPage = () => {
    const state: any = useSelector(state => state)
    const params: any = useParams();
    const [movie, setMovie] = useState<movieInterface>()


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovie(data)
            })
    }, [])
    return (
        <>
            <Header></Header>

            {
                movie && (
                    <div className="container" style={{ 
                        backgroundImage: `url("${IMAGE_API}${movie.backdrop_path}")` 
                      }} >
                        <div className="details" >
                            <div className="media-poster">
                                <img src={`${IMAGE_API}${movie.poster_path}`} alt="" />
                            </div>
                            <div className="media-info">
                                <div className="title">{movie.title}</div>
                                <div className="date">{movie.release_date}</div>
                                <div className="rating"> {movie.vote_average}</div>
                                <div className="runtime">{movie.runtime}</div>
                                <div className="overview">{movie.overview}</div>
                            </div>
                        </div>
                        <div className="companies"></div>
                    </div>

                )
            }


        </>

    )
}
