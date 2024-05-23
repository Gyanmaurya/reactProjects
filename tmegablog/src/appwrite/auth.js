 import config from "../config/config";
 import { Client, Account, ID } from "appwrite";

 export class AuthService {

     client = new Client();
     account;

     constructor(){
          this.client.setEndpoint(config.AppwriteUrl)
          .setProject(config.appwriteProjectId); 
          this.account = new Account(this.client)
     }

     async createAcount({ email, password, name}){
         
              const userAccount =  await this.account.create(ID.unique(), email, password, name);
              if(userAccount){
              // Call another methods
               return this.login({ email, password})
              }
              else{
                return userAccount
              }
          
     }

     async login ({email, password}){

          return  await this.account.createEmailSession(email,password)

     }

    async getUser (){
        return await this.account.get()
     }

     async logout (){
          return await this.account.deleteSessions('current')
     }

 }

const authService = new AuthService()

export default authService;