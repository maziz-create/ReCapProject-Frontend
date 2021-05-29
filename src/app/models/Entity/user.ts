export interface User{
    id:number;
    firstName:string;
    lastName:string;
    eMail:string;
    passwordHash:string;
    passwordSalt:string;
    status:boolean;
}