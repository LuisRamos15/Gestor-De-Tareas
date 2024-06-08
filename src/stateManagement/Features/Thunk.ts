import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "../../services/auth/auth";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

const authService = new AuthServices()

export const registerAsync = createAsyncThunk(
  'auth/register',
  async ({ data }: { data: RegisterData }, thunkApi) => {
    try {
      const response = await authService.register({ data })
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ data }: { data: LoginData }, thunkApi) => {
    try {
      const response = await authService.login({ data })
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)