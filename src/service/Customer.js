import axios from "axios"
import authHeader from "./authHeader";

const API_URL="http://localhost:8080/"

 class CustomerService{

   getCustomerById(id){
    return axios.get(API_URL+ 'user/'+ id , {headers: authHeader()});
   }

    getUserByUsername(username){
      return axios.get(API_URL+ 'user'+ username,{headers:authHeader()});
    }

 }
export default new CustomerService();