import { RootState } from '../../store';
import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persisLocalStorage } from '../../../utilities/utils'
import { loginAsync, registerAsync } from "../Thunk";

const EmptyAuthState = {
  token: '',
  userID: 0,
  username: ''
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth') as string) : EmptyAuthState,
  reducers: {
    resetAuth: () => {
      clearLocalStorage('auth');
      return EmptyAuthState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.fulfilled, () => {})
      .addCase(loginAsync.pending, (state) => {
          return state = {
            token: '',
            userID: 0,
            username: ''
          }
        }
      )
      .addCase(loginAsync.fulfilled, (state, action) => {
        persisLocalStorage('auth', action.payload);
        return state = {
          token: action.payload.token,
          userId: action.payload.userID,
          username: action.payload.username
        }
      })
  }
})

export const { resetAuth } = AuthSlice.actions

export const getAuthInfo = (state: RootState) => state.auth

export default AuthSlice.reducer