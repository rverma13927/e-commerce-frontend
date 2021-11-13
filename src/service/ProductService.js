import axios from "axios";
import properties from "../envVariables/local";
import product from "../models/Product"

 class ProductService {

   getProductById(id) {
    return axios.get(properties.API_URL+ 'product/'+id).then((response)=>{
         return response;

    }, (error) => {
     console.log(error);
   });
   }
   addProduct(product) {
    return axios.post(properties.API_URL+ 'product/add',product).then((response)=>{
         return response;
    }, (error) => {
     console.log(error);
   });
   }
 }
export default new ProductService();