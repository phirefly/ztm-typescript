export type Status = "success" | "failure";

const Departments = ["Electronics", "Home & Kitchen," "Toys & Games"]
export type Departments = (typeof Departments)
export interface ApiResponseItem {
    id: number,
    name: string,
    price: number,
    quantity, number,
    department: Departments,
}
export interface ApiResponse {
    status: Status,
    data: {
        items: ApiResponseItem[]
    }
}

export type myObject = {

}

export function apiResponse():ApiResponse;

export function apiReponse():apiResponse;