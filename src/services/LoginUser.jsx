
// funcion para hacer una peticion al servidor
const loginUser = async (info) => {
  const response = await fetch(`http://localhost:8080/api/auth/login`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  console.log(data)
}

export default loginUser