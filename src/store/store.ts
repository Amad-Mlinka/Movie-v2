import { createStore } from "redux"
import { searchTermReducer }  from "../reducers/searchTermReducer"
import { mediaTypeReducer }  from "../reducers/mediaTypeReducer"
import { mediaReducer }  from "../reducers/mediaReducer"
import { combineReducers} from "redux"

const rootReducer = combineReducers(
    {
        searchTerm:searchTermReducer,     
        media:mediaReducer,     
        mediaType:mediaTypeReducer})

export const store = createStore(rootReducer);