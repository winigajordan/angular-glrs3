import { Categories } from "./categories";

export interface Products {
    id? : number,
    name : string,
    description : string,
    oldPrice : number,
    newPrice? : number,
    qteStock ?: number,
    qteSeuil ?: number,
    qteCmd ? : number;
    isSold : boolean,
    note ? : number,
    categorie:Categories,
    pathImg:string,

}
