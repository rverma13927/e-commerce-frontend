import axios from "axios"
import authHeader from "./authHeader";

const API_URL="http://localhost:8080/"

 class CustomerService{

   getCustomerById(id){
    return axios.get(API_URL+ 'user/'+ id );
   }

    getUserByUsername(username){
      return axios.get(API_URL+ 'user'+ username);
    }

 }
export default new CustomerService();