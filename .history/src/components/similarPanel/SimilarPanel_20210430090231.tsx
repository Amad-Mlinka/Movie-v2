import React from 'react'
import { Link } from 'react-router-dom'
import { movieInterface } from '../../interface/movieInterface'
import { tvInterface } from '../../interface/tvInterface'

const IMAGE_API = `https://image.tmdb.org/t/p/w500/`

export const SimilarPanel = (sim:(tvInterface | movieInterface), media:string) => {
    return (
        <Link to={`/${media}/${sim.id}`} key={sim.id}>
            <img src={`${IMAGE_API}${sim.poster_path}`} className="similar-img" alt="" />
        </Link>
    )
}
