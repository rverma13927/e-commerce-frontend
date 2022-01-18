class localStorageService {

    getUserId() {
        return JSON.parse(localStorage.getItem("user")).id;
    }
    getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

}
export default new localStorageService();