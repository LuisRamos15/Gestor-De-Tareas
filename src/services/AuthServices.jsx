import ApiInstance from "../api/config";

class AuthServices {

  register = async (data) => {
    try {
      const response = await ApiInstance.post('/auth/register', data);
      return response
    } catch (error) {
      return Promise.reject(error);
    }
  }

  login = async (data) => {
    try {
      const response = await ApiInstance.post('/auth/login', data);
      return response
    } catch (error) {
      return Promise.reject(error);
    }
  }

}

export default AuthServices
