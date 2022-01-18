import axios from 'axios';
import jwtService from '../service/jwtService';



const axiosAuth = axios.create()

axiosAuth.interceptors.request.use(async (request) => {

    console.log(request);
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {

        if (jwtService.isJwtExpired()) {
            // go to login page
            console.log("expired")
            return request;
            // return <Redirect to='/login' />;
        }

    }
});




axiosAuth.interceptors.response.use((response) => {
    console.log(response);
})


export default axiosAuth;