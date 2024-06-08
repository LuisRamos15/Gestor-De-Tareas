import React, { useEffect, useState } from 'react'
import RowTable from './RowTable';
import tasksSercvices from '../../../services/task/task';
import useAuth from '../../../hooks/useAuth';

const Table = () => {

  const [tasks, setTask] = useState([])

  const taskService = new tasksSercvices()
  const data = useAuth();

  const userId = data.userID

  useEffect(() => {
    const getAllTask = async () => {
      const response = await taskService.getAll({ userId })
      setTask(response)
    }
    getAllTask()
  }, [])

  console.log(tasks)

  return (
    <div>
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Titulo
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Descripcion
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Prioridad
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Categoria
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Fecha vencimiento
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300">
                  opciones
                </th>
              </tr>
            </thead>
            <tbody className="h-[200px]">
              {
                tasks.map((task) => (
                  <RowTable task={task} /> 
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table