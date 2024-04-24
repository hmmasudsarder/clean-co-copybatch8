import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
  });
const useAxios = () => {
  const {logout} = useAuth
  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response.status === 401 ||error.response.status === 403){
      logout();
    }
    return Promise.reject(error);
  });
    return instance
};

export default useAxios;