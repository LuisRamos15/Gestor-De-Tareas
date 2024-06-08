import { ApiInstance } from "../../config/api"

interface Task {
  title: string;
  description: string;
  priority: string;
  category: string;
  status: string;
  expiry_date: string;
}

class tasksSercvices {
  
  create = async ({ task, userId }: { task: Task, userId: number }) => {
    try {
      const response = await ApiInstance.post(`/task/user/${userId}`, task)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  getAll = async ({ userId }: { userId: number }) => {
    try {
      const response = await ApiInstance.get(`/task/user/${userId}`)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  update = async ({ task,taskId, userId }: { task: Task, taskId: string, userId: number, }) => {
    try {
      const response = await ApiInstance.put(`/task/user/${userId}/task/${taskId}`, task)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }

  delete = async ({ userId, taskId }: { userId: string, taskId: string }) => {
    try {
      const response = await ApiInstance.delete(`/task/user/${userId}/task/${taskId}`)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
  }

}

export default tasksSercvices