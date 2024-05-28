// funcion para hacer una peticion al servidor para crear una tarea
const createTask = async (info, id) => {
  const response = await fetch(`http://localhost:8080/api/tareas/usuario/${id}`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  console.log(data)
}

export default createTask