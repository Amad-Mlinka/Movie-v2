import React from 'react'
import { movieInterface } from '../../interface/movieInterface'

const IMAGE_API = `https://image.tmdb.org/t/p/w500/`

export const SimilarPanel = (props:(tvInterface | movieInterface)) => {
    return (
        <Link to={`/${props.params.media}/${props.sim.id}`} key={props.sim.id}>
            <img src={`${IMAGE_API}${props.sim.poster_path}`} className="similar-img" alt="" />
        </Link>
    )
}
