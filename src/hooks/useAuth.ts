import { useAppSelector } from './useReduxTypesHook'
import { getAuthInfo } from "../stateManagement/Features/Auth"

const useAuth = () => {
  const data = useAppSelector(getAuthInfo)
  return data
}

export default useAuth