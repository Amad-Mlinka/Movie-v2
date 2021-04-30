import { createStore } from "redux"
import { searchTermReducer } from "../reducers/searchTermReducer"
import { mediaTypeReducer }  from "../reducers/mediaTypeReducer"
import { mediaReducer }  from "../reducers/mediaReducer"
import { genreReducer }  from "../reducers/genreReducer"
import { detailReducer }  from "../reducers/detailReducer"
import { combineReducers} from "redux"

const rootReducer = combineReducers(
    {
        searchTerm:searchTermReducer,     
        media:mediaReducer,     
        mediaType:mediaTypeReducer,
        genre:genreReducer,
        detail:detailReducer
    })

export const store = createStore(rootReducer);