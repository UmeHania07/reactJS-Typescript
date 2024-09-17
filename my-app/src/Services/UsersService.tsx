import axios from "axios"


export class UsersService{
    private static URL:string = 'https://jsonplaceholder.typicode.com/'
    

    //agr posts hn toh mai woh bhi likhti hu marzi h
    public static getAllUser(){
       let userURL:string = `${this.URL}/users`
        return axios.get(userURL)
    }

    public static getUser(userId:string){
        //kisi ek user k liye h..agr mai ye usrId string mai likho gi toh ye mujy error dega Q k ye direct ise sting get kra aha h is liye ye hm dynamic lygy 
      let userURL : string = `${this.URL}/users/${userId}`
      return axios.get(userURL)


    }
}