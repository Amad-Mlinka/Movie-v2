import {movieInterface} from "../interface/movieInterface"
import {tvInterface} from "../interface/tvInterface"

const initialState:(movieInterface)[]=[];

type Action = {
    type:string, 
    payload:(movieInterface)[]
}


export const mediaReducer = (state:(movieInterface)[] = initialState, action:Action) => {
    switch(action.type){
        case "CHANGE_MEDIA":
            return action.payload
        default:
            return state

    }
}
