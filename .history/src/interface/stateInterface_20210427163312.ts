import {movieInterface} from "./movieInterface"
import {tvInterface} from "./tvInterface"
import {genreInterface} from "./genreInterface"

export interface stateInterface {

    searchTerm:string;
    media:(movieInterface | tvInterface)[];
    mediaType:string;
    genre:genreInterface[];
}


