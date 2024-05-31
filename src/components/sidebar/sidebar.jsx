import { Link, useNavigate } from 'react-router-dom'
import { clearLocalStorage } from '../../utilities/localStorage'

const Sidebar = () => {

  const navigate = useNavigate()

  const logout = () => {
    clearLocalStorage('usuario')
    navigate('/login')
  }

  return (
    <div className="bg-white h-full w-44 py-3 rounded-md">
      <div className="text-4xl text-center text">LOGO</div>
      <nav className="mt-10">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              to="/"
              className="flex gap-2 align-middle p-3 w-full hover:border-r-4 hover:border-indigo-400 hover:text-indigo-500 hover:bg-indigo-300 hover:bg-opacity-20"
            >
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="/task"
              className="flex gap-2 align-middle p-3 w-full hover:border-r-4 hover:border-indigo-400 hover:text-indigo-500 hover:bg-indigo-300 hover:bg-opacity-20"
            >
              <p>Task</p>
            </Link>
          </li>
          <li>
            <button
              className="flex gap-2 align-middle p-3 w-full hover:border-r-4 hover:border-indigo-400 hover:text-indigo-500 hover:bg-indigo-300 hover:bg-opacity-20"
              onClick={logout}
            >
              cerrar secion
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar