import React,{useState,useEffect} from 'react';
import {useSelector} from "react-redux"
import './App.scss';
import { Header } from './components/header/Header';
import { MovieList } from './components/movieList/MovieList';




const FEATURED_API_MOVIES = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=70846ae2c3bdf81734c4dc36fab283cc&page=1";

const FEATURED_API_TV = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=70846ae2c3bdf81734c4dc36fab283cc&page=1";


const SEARCH_API_MOVIE = "https://api.themoviedb.org/3/search/movie?&api_key=70846ae2c3bdf81734c4dc36fab283cc&query="

const SEARCH_API_TV = "https://api.themoviedb.org/3/search/movie?&api_key=70846ae2c3bdf81734c4dc36fab283cc&query="



function App() {


  const [searchTerm, setSearchTerm] = useState("");

  const onchange = (term:string) => {
    setSearchTerm(term);
  }
  return (
    <div className="app">
      <Header></Header>
      <MovieList></MovieList>

    </div>
  );
}

export default App;
