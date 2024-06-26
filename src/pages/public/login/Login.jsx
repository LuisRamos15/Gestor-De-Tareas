import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from '../../../services/AuthServices'
import { persistLocalStorage } from "../../../utilities/localStorage";
// import { useEffect } from "react";

const Login = () => {

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const userState = JSON.parse(localStorage.getItem('usuario'))
  console.log(userState)

  const onSubmit = (data) => {
    const authServices = new AuthServices()
    const response = authServices.login(data)
    response.then((data) => {
      const usuario = {
        usuarioID: data.data[1],
        token: data.data[0]
      }
      console.log(usuario)
      persistLocalStorage('usuario', usuario)
      navigate('/')
    })
  }

  // useEffect(() => {
  //   userState ? navigate(`/`, { replace: true } ) : navigate(`/login`);
  // }, [navigate, userState])

  return (
    <div className="">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo electronico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                  {...register('email', {
                    required: true
                  })}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                  {...register('password', {
                    required: true
                  })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes una cuenta?{" "}
            <Link
              to={"/register"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Crea una aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login