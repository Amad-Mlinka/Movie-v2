import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom"
import { Header } from '../components/header/Header';
import { movieInterface } from '../interface/movieInterface';
import { tvInterface } from '../interface/tvInterface';
import "./DetailPage.scss"

const IMAGE_API = `https://image.tmdb.org/t/p/w500/`



export const DetailPage = () => {
    const state: any = useSelector(state => state)
    const params: any = useParams();
    const [movie, setMovie] = useState<movieInterface>()
    const [tv, setTv] = useState<tvInterface>()

    const dispatch = useDispatch();

    console.log(state)


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.media}/${params.id}?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`)
            .then(res => res.json())
            .then(data => {
                if(params.mediatype === "movie"){
                    setMovie(data)
                    console.log("Movie")
                }else{
                    setTv(data)
                    console.log("tv")
                }
               
                console.log(data)
            })
    }, [])

    return (
        <>
            <Header></Header>

            <div className="movie-details-container" style={{
                backgroundImage: `url("${IMAGE_API}${(tv && tv.backdrop_path) || (movie && movie.backdrop_path)}")`
            }}>
                <div className="backdrop" >
                    <div className="container"></div>
                    <div className="details">
                        <div className="main-details">
                            {                                
                                    <>
                                        <div className="media-poster">
                                            <img className="media-image-full" src={`${IMAGE_API}${movie.poster_path}`} alt="" />
                                        </div>
                                        <div className="media-info">
                                            <div className="title">
                                                <h1>
                                                    {movie.title}
                                                </h1>
                                            </div>
                                            <div className="date">
                                                <h2>
                                                    Release date:{movie.release_date}
                                                </h2>
                                            </div>
                                            <div className="rating">
                                                <h2>
                                                    {movie.vote_average}/10
                                                </h2>
                                            </div>
                                            <div className="runtime">
                                                <h2>
                                                    {movie.runtime}
                                                </h2>

                                            </div>
                                            <div className="overview">
                                                <h3>
                                                    {movie.overview}
                                                </h3>
                                            </div>
                                        </div>
                                    </>



                                
                            }

                            {/*
                                tv != null && (
                                    <>

                                        <div className="media-poster">
                                            <img className="media-image-full" src={`${IMAGE_API}${tv.poster_path}`} alt="" />
                                        </div>
                                        <div className="media-info">
                                            <div className="title">
                                                <h1>
                                                    {tv.name}
                                                </h1>
                                            </div>

                                            <div className="rating">
                                                <h2>
                                                    {tv.vote_average}/10
                                                    </h2>
                                            </div>
                                            <div className="seasons">
                                                {tv.seasons.length}
                                            </div>
                                            <div className="overview">
                                                <h3>
                                                    {tv.overview}
                                                </h3>
                                            </div>
                                        </div>
                                    </>


                                )
                                */}
                        </div>

                    </div>


                </div>

            </div>



        </>

    )
}
