import axios from "axios";
import properties from "../envVariables/local";

class AuthService {
  login(username, password) {
    return axios
      .post(properties.url + "api/auth/signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password,phone,firstName,lastName) {
    return axios.post(properties.url + "api/auth/signup", {
      username,
      email,
      password,
      phone,
      firstName,
      lastName,
      
    }).then(res=>{
      return res.data;
    });

    
  }
  isLoggedIn() {
    if(localStorage.getItem("user")!=undefined && localStorage.getItem("user").length!=0){
      return true;
    }
 }
}

export default new AuthService();
