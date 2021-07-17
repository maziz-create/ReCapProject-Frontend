export interface RentalDetailDto{
    customerId:number;
    carId:number;
    customerName:string;
    carName:string;
    brandName:string;
    rentDate:Date;
    returnDate?:Date;
}