import { useState } from 'react'
import loginUser from '../services/LoginUser'

const Login = () => {

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(data)
    loginUser(data)
    setData({ 
      email: '',
      password: ''
    })
  }

  const onChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }) )
  }

  return (
    <div className=''>
      <h3>Formulario de login</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">
          email
        </label>
        <input 
          type="email" 
          id="email" 
          name='email'
          onChange={onChange}
          value={data.email}
        />
        <label htmlFor="password">
          password
          <input 
            type="text" 
            id="password" 
            name='password'
            onChange={onChange}
            value={data.password}
          />
        </label>
        <button type="submit">enviar fomulario</button>
      </form>
    </div>
  )
}

export default Login