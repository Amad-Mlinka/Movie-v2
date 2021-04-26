import {movieInterface} from "../interface/movieInterface"
import {tvInterface} from "../interface/tvInterface"

const initialState:(tvInterface | movieInterface)[]=[];

type Action = {
    type:string, 
    payload:(tvInterface | movieInterface)[]
}


export const mediaReducer = (state:(tvInterface | movieInterface)[] = initialState, action:Action) => {
    switch(action.type){
        case "CHANGE_MEDIA":
            return action.payload
        default:
            return state

    }
}
