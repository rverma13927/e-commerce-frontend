import axios, { Axios } from "axios"
import properties from "../envVariables/local"
import authHeader from "./authHeader"

class cartService {


       async saveIntoCard(userId, productId) {

              await axios.post(properties.url + "cart/add", {
                     userId: userId,
                     productId: productId
              }, { headers: authHeader() }).then(res => {
                     return res;
              })
              return "null";
       }


}
export default new cartService();