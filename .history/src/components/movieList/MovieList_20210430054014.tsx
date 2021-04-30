import React, { useEffect } from 'react'
import { movieInterface } from "../../interface/movieInterface"
import { tvInterface } from "../../interface/tvInterface"
import { Movie } from '../media/Movie'
import { Tv } from '../media/Tv'
import { useSelector, useDispatch } from "react-redux"
import "./MovieList.scss"



//const FEATURED_API = `https://api.themoviedb.org/3/discover/${media}?sort_by=popularity.desc&api_key=70846ae2c3bdf81734c4dc36fab283cc&page=1`;



//const SEARCH_API = `https://api.themoviedb.org/3/search/${media}?&api_key=70846ae2c3bdf81734c4dc36fab283cc&query=${term}`



//const GENRE_API = `https://api.themoviedb.org/3/genre/${media}/list?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`



export const MovieList = () => {
    const dispatch = useDispatch();
    const state: any = useSelector(state => state)

    const getGenres = () => {
        fetch(`https://api.themoviedb.org/3/genre/${state.mediaType}/list?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: "CHANGE_GENRE", payload: data })
            })

    }


    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/${state.mediaType}?sort_by=popularity.desc&api_key=70846ae2c3bdf81734c4dc36fab283cc&page=1`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: "CHANGE_MEDIA", payload: data.results })
                console.log(state)
            })
    }

    const searchMovies = () => {
        if (state.searchTerm.length >= 3) {
            fetch(`https://api.themoviedb.org/3/search/${state.mediaType}?&api_key=70846ae2c3bdf81734c4dc36fab283cc&query=${state.searchTerm}&page=1`)
                .then(res => res.json())
                .then(data => {
                    dispatch({ type: "CHANGE_MEDIA", payload: data.results })

                })
        } else {
            getMovies();
        }

    }

    useEffect(() => {
        if(sessionStorage.getItem("term")==="undefined"){
            dispatch({ type: "RESET_TERM", payload:"" })
        }else{
            dispatch({ type: "CHANGE_TERM", payload: sessionStorage.getItem("term")})
        }
        console.log(state)
        
        dispatch({ type: "CHANGE_MEDIA_TYPE", payload: sessionStorage.getItem("mediaType") === "tv" ? "tv" : "movie" })
        getGenres();
    }, [])



    useEffect(() => {
        if (state.searchTerm.length >= 3) {
            searchMovies()
        } else {
            getMovies();
        }// eslint-disable-next-line react-hooks/exhaustive-deps        
    }, [state.mediaType]);



    useEffect(() => {
        let timer1 = setTimeout(() => searchMovies(), 1000);

        // this will clear Timeout
        // when component unmount like in willComponentUnmount
        // and show will not change to true
        return () => {
            clearTimeout(timer1);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.searchTerm]);




    return (
        <>
            <div className="count">
                <h1 className="results-header">
                    Found {state.media.length} results
             </h1>

            </div>
            <div className="container">
                <div className="media-list-container">

                    {
                        state.mediaType === "movie" ?

                            state.media.length > 0 && state.media.map((media: (movieInterface)) => (
                                <Movie key={media.id} {...media} />
                            ))
                            :
                            state.media.length > 0 && state.media.map((media: (tvInterface)) => (
                                <Tv key={media.id} {...media} />
                            ))
                    }
                </div>


            </div>

        </>
    )
}
