import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../constants/routes";
import { useAppDispath } from "../../../hooks/useReduxTypesHook";
import { loginAsync } from "../../../stateManagement/Features/Thunk";
import useAuth from "../../../hooks/useAuth";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const dispatch = useAppDispath()
  const navigate = useNavigate()

  const data = useAuth();

  const handleOnSubmit = async (data: FormData) => {
    console.log(data)
    dispatch(loginAsync({ data }))
  }

  useEffect(() => {
    data.token ? navigate(`/`, { replace: true }) : navigate(`/login`);
  }, [data.token, navigate])

  console.log(data)

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
            Inicia Seción
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={handleSubmit(handleOnSubmit)}
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo Electronico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("email", {
                    required: true,
                  })}
                />
              </div>
              {errors.email && (
                <span className="mt-2 text-red-300">
                  {errors.email.message}
                </span>
              )}
              {errors.email && errors.email.type === "required" && (
                <span className="mt-2 text-red-300">El campo es requerido</span>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                    pattern: /^\S*$/,
                    validate: (password) => {
                      return (
                        /[A-Z]/g.test(password) &&
                        /[a-z]/g.test(password) &&
                        /[0-9]/g.test(password)
                      );
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p className="mt-2 text-red-300">{errors.password.message}</p>
              )}
              {errors.password && errors.password.type === "validation" && (
                <p className="mt-2 text-red-300">{errors.password.message}</p>
              )}
              {errors.password && errors.password.type === "required" && (
                <span className="mt-2 text-red-300">El campo es requerido</span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#79e2ff] px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm hover:bg-[#79e2ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar Seción
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {" "}
            No tienes una cuenta?{" "}
            <Link
              to={`${PublicRoutes.REGISTER}`}
              className="font-semibold leading-6 text-[#79e2ff] hover:text-[#5ed8fa]"
            >
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login