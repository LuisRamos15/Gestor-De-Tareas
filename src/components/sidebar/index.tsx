import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../constants/routes";
import { clearLocalStorage } from "../../utilities/utils";
import { resetAuth } from "../../stateManagement/Features/Auth";
import { useAppDispath } from "../../hooks/useReduxTypesHook";
import LOGO from '../../assets/b9667c64-2b27-4022-88e2-0bc3f52f6bfe.png'

const Sidebar = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispath();

  const logout = () => {
    clearLocalStorage('auth')
    dispatch(resetAuth());
    navigate(PublicRoutes.LOGIN);
  }

  return (
    <section className="bg-white w-[260px] h-full">
      <span className="text-lg text-center w-full pt-3 flex items-center justify-center">
        <img src={LOGO} alt="LOGO" width={120} height={120} />
      </span>
      <span className="bg-gray-300 h-[.1rem] w-full inline-block"></span>
      <nav className="h-min">
        <ul className="p-3 flex flex-col gap-4 list-none w-full">
          {/* <li>
            <Link
              to={`${PrivateRoutes.ADMIN}`}
              className="py-2 px-4 rounded-md border-solid border-gray-300 border-2 w-full hover:bg-gray-200 flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#9e9e9e"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
              <p className="text-[#9e9e9e] text-lg">Home</p>
            </Link>
          </li> */}
          <li>
            <Link
              // to={`${PrivateRoutes.ACOOUNTS}`}
              to={`${PrivateRoutes.ADMIN}`}
              className="py-2 px-4 rounded-md border-solid border-gray-300 border-2 w-full hover:bg-gray-200 flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-circle"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#9e9e9e"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
              <p className="text-[#9e9e9e] text-[14px]">Tareas</p>
            </Link>
          </li>
          <li>
            <button
              className="py-2 px-4 rounded-md border-solid border-gray-300 border-2 w-full hover:bg-gray-200 flex items-center gap-3"
              onClick={logout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-box"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#9e9e9e"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                <path d="M12 12l8 -4.5" />
                <path d="M12 12l0 9" />
                <path d="M12 12l-8 -4.5" />
              </svg>
              <p className="text-[#9e9e9e] text-[14px]">Cerrar secion</p>
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Sidebar