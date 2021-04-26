import React, { useState, useEffect } from 'react'
import { movieInterface } from "../../interface/movieInterface"
import { tvInterface } from "../../interface/tvInterface"
import { Movie } from '../movie/Movie';
import { useSelector, useDispatch } from "react-redux"



const FEATURED_API_TV = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=70846ae2c3bdf81734c4dc36fab283cc&page=1`;
const FEATURED_API_MOVIE = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=70846ae2c3bdf81734c4dc36fab283cc&page=1`;

const SEARCH_API_TV = `https://api.themoviedb.org/3/search/tv?&api_key=70846ae2c3bdf81734c4dc36fab283cc&query=`
const SEARCH_API_MOVIE = `https://api.themoviedb.org/3/search/movie?&api_key=70846ae2c3bdf81734c4dc36fab283cc&query=`



export const MovieList = () => {
    const dispatch = useDispatch();
    const state: any = useSelector(state => state)

    const [movies, setMovies] = useState<movieInterface[]>([]);


    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/${state.mediaType}?sort_by=popularity.desc&api_key=70846ae2c3bdf81734c4dc36fab283cc&page=1`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
                dispatch({ type: "CHANGE_MEDIA", payload: data.results })
            })
    }

    const searchMovies = () => {
        console.log("Search movies")
        if (state.searchTerm.length >= 3) {
            fetch(`https://api.themoviedb.org/3/search/${state.mediaType}?&api_key=70846ae2c3bdf81734c4dc36fab283cc&query=${state.searchTerm}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.results);
                    setMovies(data.results);
                    dispatch({ type: "CHANGE_MEDIA", payload: data.results })
                    
                })
        }

    }


    useEffect(() => {
        if(state.searchTerm.length >=3){
            searchMovies()
        }else{
            getMovies();
        }
        
    }, [state.mediaType]);

    useEffect(() => {
        searchMovies();
        console.log(state.searchTerm)
    }, [state.searchTerm]);




    return (
        <>
            <div className="movie-container">
                {
                    movies.length > 0 && movies.map(movie => (
                        <Movie key={movie.id} {...movie} />
                    ))
                }
            </div>

        </>
    )
}
