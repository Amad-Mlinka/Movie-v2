import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
import { Header } from '../components/header/Header';
import { movieInterface } from '../interface/movieInterface';
import { tvInterface } from '../interface/tvInterface';
import { Trailer } from "../components/trailer/Trailer"
import "./DetailPage.scss"


const IMAGE_API = `https://image.tmdb.org/t/p/w500/`
//const VIDEO_API= `https://api.themoviedb.org/3/movie/${media.id}/videos?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`



export const DetailPage = () => {
    const state: any = useSelector(state => state)
    const params: any = useParams();
    const [movie, setMovie] = useState<movieInterface>()
    const [tv, setTv] = useState<tvInterface>()
    const [embed, setEmbed] = useState<string>("");



    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.media}/${params.id}?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`)
            .then(res => res.json())
            .then(data => {
                if (params.media === "movie") {
                    setMovie(data)
                } else {
                    setTv(data)
                }

            })
            fetch(`https://api.themoviedb.org/3/${params.media}/${params.id}/videos?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results[0].key)

            })
        console.log(state)
    }, [])

    return (
        <>
            <div className="movie-details-container" style={{
                backgroundImage: `url("${IMAGE_API}${(tv && tv.backdrop_path) || (movie && movie.backdrop_path)}")`
            }}>
                <div className="backdrop" >
                    <div className="container">
                        <div className="details">
                            <div className="main-details">
                                {
                                    movie && (
                                        <>
                                            <div className="poster-info">
                                                <div className="media-poster">
                                                    <img className="media-image-full" src={`${IMAGE_API}${movie.poster_path}`} alt="" />
                                                </div>
                                                <div className="media-info">
                                                    <div className="title">
                                                        <h1>
                                                            {movie.title}
                                                        </h1>
                                                    </div>
                                                    <div className="media-info-item date">
                                                        <h2>
                                                            Release date: {movie.release_date}
                                                        </h2>
                                                    </div>
                                                    <div className="media-info-item rating">
                                                        <h2>
                                                            Public rating: {movie.vote_average}/10
                                                </h2>
                                                    </div>
                                                    <div className="media-info-item runtime">
                                                        <h2>
                                                            Runtime: {movie.runtime} minutes
                                                    </h2>

                                                    </div>
                                                    <div className="overview">
                                                    <h3>
                                                        {movie.overview}
                                                    </h3>
                                                </div>

                                                </div>
                                            </div>

                                            
                                        </>



                                    )
                                }

                                {
                                    tv != null && (
                                        <>
                                            <div className="poster-info">
                                                <div className="media-poster">
                                                    <img className="media-image-full" src={`${IMAGE_API}${tv.poster_path}`} alt="" />
                                                </div>

                                                <div className="media-info">

                                                    <div className="title">
                                                        <h1>
                                                            {tv.name}
                                                        </h1>
                                                    </div>

                                                    <div className="media-info-item rating">
                                                        <h2>
                                                            Public rating: {tv.vote_average}/10
                                                    </h2>
                                                    </div>

                                                    <div className="media-info-item seasons">
                                                        <h2>
                                                            No. of seasons: {tv.seasons.length} {tv.seasons.length > 1 ? "seasons" : "season"}
                                                        </h2>

                                                    </div>
                                                    <div className="overview">
                                                    <h3>
                                                        {tv.overview}
                                                    </h3>
                                                </div>

                                                </div>
                                            </div>
                                            <div className="trailer">
                                            
                                            </div>



                                            
                                        </>


                                    )
                                }
                            </div>

                        </div>

                    </div>


                </div>

            </div>



        </>

    )
}
