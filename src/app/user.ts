export interface User {
    id:number;
    name:string;
    username:string;
    password:string;
    role:string;
    email:string;
    address:{
        city:string;
        zipcode:string;
    },
    phone:string;
}
