import React, { useEffect } from "react";
import { useForm } from "react-hook-form"
import tasksSercvices from "../../../services/task/task";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface Task {
  id?: string
  title: string;
  description: string;
  priority: string;
  category: string;
  status: string;
  expiry_date: string;
}

const FormEdit = ({ task }: { task: Task }) => {

  const { register, handleSubmit, setValue } = useForm<Task>({
    defaultValues: {
      id: '',
      title: '',
      description: '',
      priority: 'baja',
      category: '',
      status: 'PENDIENTE',
      expiry_date: '',
    }
  })

  useEffect(() => {
    setValue('id', task?.id);
    setValue('title', task?.title);
    setValue('category', task?.category);
    setValue('description', task?.description);
    setValue('priority', task?.priority);
    setValue('status', task?.status);
    setValue('expiry_date', task?.expiry_date);
  }, [task, setValue])

  const taskService = new tasksSercvices();
  const user = useAuth()
  const navigate = useNavigate()

  const handleOnSubmit = async (task: Task) => {
    const userId = user.userID
    const taskId = task?.id
    console.log(task)
    await taskService.update({ task, taskId, userId })
    navigate('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="mt-4 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Titulo</label>
            <input
              id="title"
              type="text"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('title', {
                required: true
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Descripcion</label>
            <input
              id="description"
              type="text"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('description', {
                required: true
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="priority">Prioridad</label>
            <select
              id="priority"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('priority', {
                required: true
              })}
            >
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">baja</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Categoria</label>
            <input
              id="category"
              type="text"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('category', {
                required: true
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="status">Estado</label>
            <select
              id="status"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('status', {
                required: true
              })}
            >
              <option value="PENDIENTE">Pendiente</option>
              <option value="EN_PROCESO">En proceso</option>
              <option value="COMPLETADO">Completado</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="expiry_date">Fecha de vencimiento</label>
            <input
              id="expiry_date"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('expiry_date', {
                required: true
              })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="p-1 bg-slate-50 rounded-md border-solid border-gray-300 border-2 hover:bg-gray-100"
        >
          Editar tarea
        </button>
      </form>
    </>
  );
}

export default FormEdit