const initialState:string="";

type Action = {
    type:string, 
    payload:string
}
export const searchTermReducer = (state:string=initialState, action:Action):string => {//**Saves search term in global state so during navigation, search term will be saved
   switch(action.type){
       case "CHANGE_TERM": {
            return action.payload;
       }
       case "RESET_TERM": {
        return initialState;
   }
       default:
           return state
   }
}

