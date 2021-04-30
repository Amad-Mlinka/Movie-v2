import { mediaInterface } from "./mediaInterface";

export interface tvInterface {    
    name: string,
    seasons:any[],
    id: number,
    overview: string,
    poster_path: string,
    vote_average:number,
    genre_ids:number[],
    backdrop_path:string,
    original_language:string

    
}


