import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{

client = new Client();
account;

constructor(){
    this.client.setEndpoint(conf.appwriteUrl)
               .setProject(conf.appwriteProjectId)

    this.account = new Account(this.client)
}

async createAccount({email, password, name}){
    try {
        const userAccount = await this.account.create(ID.unique(), email, password, name);
        if(userAccount){
            // call another method
            return this.login({email, password});
        }
        else{
            return userAccount;
        }
    } catch (error) {
        throw error;
    }
}

async login({email, password}){
    try {
        const v = await this.account.createEmailPasswordSession(email, password);
        console.log("login successful")
        return v;
    } catch (error) {
        console.log("whatever error")
        throw error;
    }
}

async getCurrentUser(){
    console.log("account:", this.account)
    try {
        const user = await this.account.get();
        console.log("my user", user);
        return user;

    } catch (error) {
        console.log("myerror: getCurrentUser",error.message)
        throw error;
    }
    return null;
}

async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("logout error:", error);
    }
}
}

const authService = new AuthService();

export default authService;