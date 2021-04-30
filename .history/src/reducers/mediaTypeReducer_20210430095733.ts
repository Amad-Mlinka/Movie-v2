const initialState:string="tv";

type Action = {
    type:string, 
    payload:string
}
export const mediaTypeReducer = (state:string=initialState, action:Action):string => {//**Media type reducer is saved in the global store so the selected media type will be saved during navigation
   switch(action.type){
       case "CHANGE_MEDIA_TYPE": {
            return action.payload;
       }
       default:
           return state
   }
}

