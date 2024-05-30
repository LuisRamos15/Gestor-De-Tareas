import { useState } from "react";
import useColumnTasks from "../../../hooks/useColumnTask";
import { ColumnType } from "../../../constants/constants";

const TaskPage = () => {

  const { addEmptyTask } = useColumnTasks(ColumnType.TO_DO);

  const [task, setTask] = useState({
    titulo: '',
    descripcion: '',
    fechaVencimiento: '',
    prioridad: '',
    status: '',
    categoria: '',
  })

  const handleChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const hanleSubmit = (e) => {
    e.preventDefault();
    addEmptyTask(task)
    console.log(task)
  }

  return (
    <section className="bg-white h-full rounded-md p-3">
      <h2 className="text-center text-2xl mb-3">Crear tarea</h2>
      <form
        className="space-y-6"
        onSubmit={hanleSubmit}
        method="POST"
      >
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="titulo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              titulo
            </label>
            <div className="mt-2">
              <input
                id="titulo"
                name="titulo"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                value={task.titulo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="descripcion"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              descripcion
            </label>
            <div className="mt-2">
              <input
                id="descripcion"
                name="descripcion"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                value={task.descripcion}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="fechaVencimiento"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              fechaVencimiento
            </label>
            <div className="mt-2">
              <input
                id="fechaVencimiento"
                name="fechaVencimiento"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                value={task.fechaVencimiento}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="prioridad"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              prioridad
            </label>
            <div className="mt-2">
              <input
                id="prioridad"
                name="prioridad"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                value={task.prioridad}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="categoria"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              categoria
            </label>
            <div className="mt-2">
              <input
                id="categoria"
                name="categoria"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                value={task.categoria}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="categoria"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              stados
            </label>
            <div className="mt-2">
              <select name="estados" id="estados">
                <option value="COMPLETADO">completado</option>
                <option value="PENDIENTE">pendiente</option>
                <option value="EN_PROCESO">en proceso</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Crear tarea
          </button>
        </div>
      </form>
    </section>
  );
}

export default TaskPage