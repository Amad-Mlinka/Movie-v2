const initialState:string="tv";

type Action = {
    type:string, 
    payload:string
}
export const mediaTypeReducer = (state:string=initialState, action:Action):string => {
   switch(action.type){
       case "CHANGE_MEDIA_TYPE": {
            return action.payload;
       }
       default:
           return state
   }
}

