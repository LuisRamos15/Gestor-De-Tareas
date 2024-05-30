import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayautContainer from './components/container/layout/layautContainer'
import TaskPage from './pages/private/task/task'
import ProjectsPage from './pages/private/projects/projects'
import Login from './pages/public/login/Login'
import Register from './pages/public/register/Registro'
// import AuthGuard from './guards/authGuards'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route element={<AuthGuard privateValidation={true} />}></Route> */}
        <Route path="/" element={<LayautContainer />}>
          <Route index element={<ProjectsPage />} />
          <Route path="/task" element={<TaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
