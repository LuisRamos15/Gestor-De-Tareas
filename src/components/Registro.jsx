import { useState } from 'react'
import styles from './registro.module.css'
import registerUser from '../services/registerUser'

const Registro = () => {

  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(data)
    registerUser(data)
    setData({ 
      username: '',
      email: '',
      password: ''
    })
  }

  const onChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }) )
  }

  return (
    <div className=''>
      <h3>Formulario de registro</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">
          username
          <input 
            type="text" 
            id="username" 
            name='username'
            onChange={onChange}
            value={data.username}
          />
        </label>
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

export default Registro