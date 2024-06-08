import { useForm } from 'react-hook-form'
interface Bot {
  nombre: string;
  divisa: string;
  lotaje: string;
  operacion: string;
  pips: string;
  replicas: string;
  cuenta: string;
  estado: string;
}

const FormBots = () => {

  const { register, handleSubmit } = useForm<Bot>();

  const handleOnSubmit = (data: Bot) => {
    console.log(data)
  }

  // const [data, setData] = useState<Bot>({
  //   nombre: '',
  //   divisa: '',
  //   lotaje: '',
  //   operacion: 'compra',
  //   pips: '',
  //   replicas: '',
  //   cuenta: '',
  //   estado: 'apagado'
  // })

  return (
    <>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="mt-4 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('nombre', {
                required: true
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="divisa">Divisa</label>
            <input
              id="divisa"
              type="text"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('divisa', {
                required: true
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lotaje">Lotaje</label>
            <input
              id="lotaje"
              type="text"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('lotaje', {
                required: true
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="operacion">Operación</label>
            <select
              id="operacion"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('operacion', {
                required: true
              })}
            >
              <option value="compra">Compra</option>
              <option value="venta">Venta</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pips">Ganancia Objetivo (Pips)</label>
            <input
              id="pips"
              type="text"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('pips', {
                required: true
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="replicas">Ordenes de seguridad (Replicas)</label>
            <input
              id="replicas"
              type="text"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('replicas', {
                required: true
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cuenta">Cuenta asociada</label>
            <select
              id="cuenta"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('cuenta', {
                required: true
              })}
            >
              <option value="seleccionar">Seleccionar</option>
              <option value="Cuenta 1">Cuenta 1</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="estado">Estadp</label>
            <select
              id="estado"
              className="border-2 border-gray-200 rounded-md outline-none px-4 py-2 w-[350px]"
              {...register('estado', {
                required: true
              })}
            >
              <option value="apagado">apagado</option>
              <option value="encendido">Encendido</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="p-1 bg-slate-50 rounded-md border-solid border-gray-300 border-2 hover:bg-gray-100"
        >
          Crear Bot
        </button>
      </form>
    </>
  );
}

export default FormBots