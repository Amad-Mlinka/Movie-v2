import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Switch, useParams } from "react-router-dom"
import { Header } from '../components/header/Header';
import { movieInterface } from '../interface/movieInterface';
import { tvInterface } from '../interface/tvInterface';
import { Trailer } from "../components/trailer/Trailer"
import { withRouter } from "react-router-dom";
import "./DetailPage.scss"


const IMAGE_API = `https://image.tmdb.org/t/p/w500/`
//const VIDEO_API= `https://api.themoviedb.org/3/movie/${media.id}/videos?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`



export const DetailPage = () => {
    const dispatch = useDispatch();
    const state: any = useSelector(state => state)
    const params: any = useParams();
    const [movie, setMovie] = useState<movieInterface>()
    const [tv, setTv] = useState<tvInterface>()
    const [embed, setEmbed] = useState<string>("");
    const [similar, setSimilar] = useState<tvInterface[] | movieInterface[]>([])
    const [counter, setCounter] =useState<number>(0)


    const getMedia = (media:string,id:string) => {
        fetch(`https://api.themoviedb.org/3/${media}/${id}?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`)
        .then(res => res.json())
        .then(data => {
            if (params.media === "movie") {
                setMovie(data)
            } else {
                setTv(data)
            }
    })

    const getTrailer = (media:string,id:string) => {
        fetch(`https://api.themoviedb.org/3/${params.media}/${params.id}/videos?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`)
            .then(res => res.json())
            .then(data => {

                data.results.length>0 && setEmbed(data.results[0].key)

            })
    }

    const getSimilar = (media:string,id:string) => {
        fetch(`http://api.themoviedb.org/3/${params.media}/${params.id}/similar?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`)
            .then(res => res.json())
            .then(data => {
                setSimilar(data.results.slice(0, 4))

            })
    }


    useEffect(() => {
       
            
        

        f

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
                                                <div className="similar">
                                                    <h1 className="similar-title">Simillar {params.media === "tv" ? "TV Shows" : "Movies"}</h1>

                                                        <div className="similar-container">
                                                            {similar.map((sim: (tvInterface | movieInterface)) =>
                                                            (
                                                                <Link to={{ pathname: `/${params.media}/${sim.id}` }} key={sim.id} onClick={()=>{

                                                                    dispatch({ type: "CHANGE_DETAIL", payload: sim })
                                                                    console.log(state)
                                                                }}>
                                                                    <img src={`${IMAGE_API}${sim.poster_path}`} className="similar-img" alt="" />
                                                                </Link>
                                                            )
                                                            )}

                                                        </div>


                                                    <div className="trailer">
                                                        <Trailer embedId={`${embed}`}></Trailer>
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
                                                <div className="similar">
                                                    <h1 className="similar-title">Simillar {params.media === "tv" ? "TV Shows" : "Movies"}</h1>
                                                    <div className="similar-container">
                                                    {similar.map((sim: (tvInterface | movieInterface)) =>
                                                            (
                                                                <Link to={{ pathname: `/${params.media}/${sim.id}` }} key={sim.id}>
                                                                    <img src={`${IMAGE_API}${sim.poster_path}`} className="similar-img" alt="" />
                                                                </Link>
                                                            )
                                                            )}

                                                    </div>
                                                    <div className="trailer">
                                                        <Trailer embedId={`${embed}`}></Trailer>
                                                    </div>

                                                </div>
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
