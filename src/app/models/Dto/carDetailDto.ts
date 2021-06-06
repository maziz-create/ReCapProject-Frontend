import { CarImage } from "../Entity/carImage";

export interface CarDetailDto{
    carId:number;
    carName:string;
    brandId:number;
    brandName:string;
    colourId:number;
    colourName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    imagePaths:string[];
}