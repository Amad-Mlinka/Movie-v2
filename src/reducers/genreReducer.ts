import {genreInterface} from "../interface/genreInterface"


const initialState:genreInterface[]=[];

type Action = {
    type:string, 
    payload:genreInterface []
}


export const genreReducer = (state:genreInterface[] = initialState, action:Action) => {
    switch(action.type){
        case "CHANGE_GENRE":
            return action.payload
        default:
            return state

    }
}
