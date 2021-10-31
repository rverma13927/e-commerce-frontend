import axios from "axios"

const API_URL="http://localhost:8080/"

 class CustomerService{

   getCustomerById(id){
    return axios.get(API_URL+ 'product/1').then((response)=>{

         console.log(response);
         return response;

    }, (error) => {
     console.log(error);
   });

   }
 }
export default new CustomerService();