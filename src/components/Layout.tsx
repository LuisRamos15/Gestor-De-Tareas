import React from "react";
import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"

const Layout = () => {
  return (
    <div className="flex w-screen h-screen fixed">
      <Sidebar />
      <section className="bg-gray-300 bg-opacity-45 w-full h-full p-2">
        {/* <div className="flex flex-wrap bg-white rounded-lg p-2 justify-end">
          <div className="flex items-center">
            <div className="relative flex items-center ml-2 lg:ml-4">
              <button
                className="flex items-center justify-center p-2 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary"
                onClick={() => alert("Notificatión")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bell-ringing"
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
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                  <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
                </svg>
              </button>
            </div>
            <div className="relative flex items-center ml-2 lg:ml-4">
              <button
                className="flex items-center justify-center p-2 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary"
                onClick={() => alert("Profile user")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user"
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
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </button>
            </div>
          </div>
        </div> */}
        <Outlet />
      </section>
    </div>
  );
}

export default Layout