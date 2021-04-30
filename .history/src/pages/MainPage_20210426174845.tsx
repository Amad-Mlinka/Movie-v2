import React from 'react'
import { Header } from '../components/header/Header';
import { MovieList } from '../components/movieList/MovieList';


export const MainPage = () => {
    return (
        <div>
            <Header></Header>
            <MovieList></MovieList>
        </div>
    )
}
