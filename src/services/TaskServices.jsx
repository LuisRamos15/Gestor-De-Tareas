import ApiInstance from "../api/config"

class TaskServices {
  
  create = async (id, data) => {
    try {
      const response = await ApiInstance.post(`/tareas/usuario/${id}`, data)
      return response
    } catch (error) {
      return Promise.reject(error)
    }
  }

}

export default TaskServices