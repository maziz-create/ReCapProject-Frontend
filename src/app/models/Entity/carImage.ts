import { ResponseModel } from "../ResponseModels/responseModel";

export interface CarImage{
    id:number;
    carId:number;
    imagePath:string[];
    date:Date; //c#taki DateTime formatı bu.
}