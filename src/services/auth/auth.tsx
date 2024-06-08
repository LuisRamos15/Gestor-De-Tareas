import { ApiInstance } from "../../config/api"

class AuthServices {
  
  register = async ({ data }: { data: any }) => {
    try {
      const response = await ApiInstance.post('/register', data)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  login = async ({ data }: { data: any }) => {
    try {
      const response = await ApiInstance.post('/login', data)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }

}

export default AuthServices