import { IUserList } from "../Modules/IUserList";

//service concept h

export class UserService{
    private static userList:IUserList[] = [
        { sno: 1, name: "Hania", age: 19 },
        { sno: 2, name: "Aiman", age: 25 },
        { sno: 3, name: "Sana", age: 20 },
    ]

    public static getAllUser(){
        return this.userList
    }
    
}