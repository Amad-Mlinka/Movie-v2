import {movieInterface} from "./movieInterface"
import {tvInterface} from "./tvInterface"
import {genreInterface} from "./genreInterface"

export interface stateInterface { //**State interface for a more easy state management

    searchTerm:string;//** Saving search term as it's being written to the state
    media:(movieInterface | tvInterface)[]; //**Array of movies or tv that get refreshed with each change of either mediaType or searchTerm
    mediaType:string;//**Type of media that is being presenbted, can be either Movie or Tv show("movie" and "tv" respectively)
    genre:genreInterface[];//**Types of genres, array used to provide genres to found movies or tv shows
}


