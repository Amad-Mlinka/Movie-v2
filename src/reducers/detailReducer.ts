import {movieInterface} from "../interface/movieInterface"
import {tvInterface} from "../interface/tvInterface"

const initialState:(tvInterface | movieInterface | null)=null;

type Action = {
    type:string, 
    payload:(tvInterface | movieInterface)[]
}


export const detailReducer = (state:(tvInterface | movieInterface | null) = initialState, action:Action) => {
    switch(action.type){
        case "CHANGE_DETAIL":
            return action.payload
        default:
            return state

    }
}
