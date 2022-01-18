import axios from "axios";
import properties from "../envVariables/local";
import product from "../models/Product"
import authHeader from "./authHeader";

class ProductService {

  async getProductById(id) {
    return await axios.get(properties.url + 'product/' + id).then((response) => {
      return response;

    }, (error) => {
      console.log(error);
    });
  }
  addProduct(product) {
    return axios.post(properties.url + 'product/add', product).then((response) => {
      return response;
    }, (error) => {
      console.log(error);
    });
  }
}
export default new ProductService();