import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth';
import tasksSercvices from '../../../services/task/task';
import Modal from '../../../components/Modal';
import useModal from '../../../hooks/useModal';
import FormEdit from './FormEdit';

interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  category: string;
  status: string;
  expiry_date: string;
}

const RowTable = ({ task }: { task: Task }) => {

  const { open, handleCloseModal, handleOpenModal } = useModal()
  const taskService = new tasksSercvices()
  const data = useAuth();
  const userId = data.userID

  const [data2, setData2] = useState<Task>()

  const deleteTask = async (taskId: any) => {
    const response = await taskService.delete({ taskId, userId })
    console.log(response)
  }
    
  const updateTask = async (task: any, taskId: any) => {
    console.log(task)
    console.log(task)
    setData2(task)
    handleOpenModal()
    // const response = await taskService.update({ task, taskId, userId })
    // console.log(response)
  }

  return (
    <tr className="text-[14px]">
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">{task.title}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {task.description}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {task.priority}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative text-xs">{task.status}</span>
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        {task.category}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        {task.expiry_date}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
        <button
          className="p-1 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none mb-2"
          onClick={() => {
            updateTask(task, task.id);
          }}
        >
          editar
        </button>
        <button
          className="p-1 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          eliminar
        </button>
      </td>

      <Modal closeModal={handleCloseModal} open={open} title="Editar Tarea">
        <FormEdit task={data2} />
      </Modal>
    </tr>
  );
}

export default RowTable