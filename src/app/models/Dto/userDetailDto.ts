export interface UserDetailDto {
    id: number;
    customerId: number;
    firstName: string;
    lastName: string;
    companyName?: string;
    email: string;
}