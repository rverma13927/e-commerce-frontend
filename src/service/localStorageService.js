class localStorageService {

      getUserId() {
          return  JSON.parse(localStorage.getItem("user")).id;
      }

}
export default new localStorageService();