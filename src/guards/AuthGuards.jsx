import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from '../hooks/useReduxTypesHook'
import { PrivateRoutes, PublicRoutes } from "../constants/routes"
import { getAuthInfo } from '../stateManagement/Features/Auth/index'

const privateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

const AuthGuard = (privateValidation) => {

  const { token } = useAppSelector(getAuthInfo)

  return token ? (
    privateValidation ? (
      privateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  ); 
}

export default AuthGuard