import { mediaInterface } from "./mediaInterface";

export interface movieInterface extends mediaInterface {    
    title: string,
    release_date:Date,
    runtime:number
}


