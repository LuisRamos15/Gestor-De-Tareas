import React, { useState } from "react";
import Modal from "../../components/Modal";
import useModal from "../../hooks/useModal";
import AccountForm from "./components";
import Table from "./components/Table";
import useAuth from "../../hooks/useAuth";

const TasksPage = () => {

  const { open, handleCloseModal, handleOpenModal } = useModal()

  const user = useAuth()

  const [open2, setOpen2] = useState<boolean>(false)

  const handleOpenModal2 = () => {
    setOpen2(true)
  }

  const handleCloseModal2 = () => {
    setOpen2(!true)
  }  

  return (
    <section className="h-full rounded-md mt-4 text-[14px] relative">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Tareas</h2>
        {' '}
        <h3>{user.username}</h3>
        <button
          className="px-4 py-2 bg-slate-50 rounded-md border-solid border-gray-300 border-2 hover:bg-gray-100 flex items-center gap-3"
          onClick={handleOpenModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-plus"
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
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
          </svg>
          <p>Nueva tarea</p>
        </button>
      </div>
      <div className="mt-4 h-[80%] p-2">
        <Table />

        <Modal closeModal={handleCloseModal} open={open} title="Nueva Tarea">
          <AccountForm />
        </Modal>

        <Modal closeModal={handleCloseModal2} open={open2} title="Editar Tarea">
          <AccountForm />
        </Modal>

      </div>
    </section>
  );
}

export default TasksPage