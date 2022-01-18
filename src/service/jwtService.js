
import localStorageService from "./localStorageService";
import jwt_decode from "jwt-decode";


class jwtService {

    isJwtExpired() {
        let user = localStorageService.getUser();

        let decodedToken = jwt_decode(user.accessToken, { complete: true });
        var dateNow = new Date();

        if (decodedToken.exp < dateNow.getTime() / 1000)
            return true;
        return false;
    }


}

export default new jwtService();