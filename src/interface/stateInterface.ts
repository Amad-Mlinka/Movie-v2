import {movieInterface} from "./movieInterface"
import {tvInterface} from "./tvInterface"

export interface stateInterface {

    searchTerm:string;
    media:(movieInterface | tvInterface)[];
    mediaType:string;
}


