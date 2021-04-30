import {movieInterface} from "./movieInterface"
import {tvInterface} from "./tvInterface"
import {genreInterface} from "./genreInterface"

export interface stateInterface { //**State interface for a more easy state management

    searchTerm:string;//** Saving search term as it's being written to the state
    media:(movieInterface | tvInterface)[]; //**Array of movies or tv that get refreshed with each change of either mediaType or searchTerm
    mediaType:string;
    genre:genreInterface[];
}


