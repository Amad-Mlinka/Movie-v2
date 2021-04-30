import React, { useEffect } from 'react'
import { tvInterface } from "../../interface/tvInterface"
import { genreInterface } from "../../interface/genreInterface"
import { Link } from "react-router-dom"
import "./Media.scss";
import { useDispatch, useSelector } from "react-redux"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';




const IMAGE_API = "https://image.tmdb.org/t/p/w500/"



export const Tv = (media: tvInterface) => {
    const dispatch = useDispatch()
    const state: any = useSelector(state => state)
    let genres = state.genre.genres.filter((genre: genreInterface) => media.genre_ids.includes(genre.id));

    const onClick = () => {
        dispatch({ type: "CHANGE_DETAIL", payload: media })
    }

    return (
        <Link to={`/tv/${media.id}`} onClick={onClick}>
            <div className="media" key={media.id}>
                <div className="media-container-preview">
                    <div className="media-over">
                        <img className="media-img-preview" src={media.poster_path != null ? IMAGE_API + media.poster_path : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png"} alt="" />
                        <div className="media-details-preview">
                            <div className="rating-container">

                                <p className="rating-preview">
                                    <ThumbUpAltIcon />
                                    {media.vote_average}/10
                                </p>

                            </div>
                            <div className="genre-preview">
                                {
                                    genres.slice(0, 2).map((genre: genreInterface) => {
                                        return <p className="genre" key={genre.id}>{genre.name}</p>
                                    })

                                }
                            </div>
                            <div className="details-btn-container">
                                <input type="button" className="details-btn" value="View Details" />
                            </div>
                        </div>
                    </div>
                    <div className="media-title-preview">
                        <h3>{media.name}</h3>
                    </div>


                </div>


            </div>
        </Link>
    )
}
