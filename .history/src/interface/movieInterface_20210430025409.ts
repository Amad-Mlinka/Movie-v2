import { mediaInterface } from "./mediaInterface";

export interface movieInterface {    
    title: string,
    release_date:Date,
    runtime:number,id: number,
    overview: string,
    poster_path: string,
    vote_average:number,
    genre_ids:number[],
    backdrop_path:string,
    original_language:string
}


