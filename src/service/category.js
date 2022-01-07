import axios from "axios";
import properties from "../envVariables/local";
import authHeader from "./authHeader";

 class CategoryService {


   getCategories() {
    return axios.get(properties.url+ 'category',{headers:authHeader()}).then((response)=>{
         return response;
    }, (error) => {
     console.log(error);
   });
   }
 }
export default new CategoryService();