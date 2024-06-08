import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispath, RootState } from '../stateManagement/store'

export const useAppDispath: () => AppDispath = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector