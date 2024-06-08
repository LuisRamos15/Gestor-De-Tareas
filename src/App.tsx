import React from 'react'
import './styles/App.css'
import { Layout } from './components'
import Login from './pages/public/Login'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './constants/routes'
import { Acoounts, Bots } from './pages'
import Register from './pages/public/Register'
import AuthGuard from './guards/AuthGuards'
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${PublicRoutes.LOGIN}`} element={<Login />} />
        <Route path={`${PublicRoutes.REGISTER}`} element={<Register />} />
        <Route element={<AuthGuard privateValidation={true} />} >
            <Route path={`${PrivateRoutes.ADMIN}`} element={<Layout />}>
            <Route index element={<Acoounts />} />
            <Route path={`${PrivateRoutes.BOTS}`} element={<Bots />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
