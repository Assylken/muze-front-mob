import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { IAuth, ILogin, IRegister, IUser } from "../../types";
import authService from "../services/auth.service";
import { authHeader } from "../services/auth-header";
import { API_URL } from "../http";
import { useAppSelector } from "../hooks";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Fetch user
export const fetchUser = createAsyncThunk<
  any,
  void,
  {
    rejectValue: string;
  }
>("auth/fetchUser", async (_, thunkAPI) => {
  try {
    console.log("Common");

    const refetch = await axios.get(API_URL + "users/me", {
      withCredentials: true,
      headers: await authHeader(),
    });
    console.log("REFETCH", refetch.data);

    return refetch.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message: string = (
        error.response &&
        error.response.data &&
        error.response.data.message
      )(error.response && error.response.data && error.response.data.detail);
      error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

// Register user
export const register = createAsyncThunk<
  any,
  IRegister,
  {
    rejectValue: string;
  }
>("auth/register", async (user, thunkAPI) => {
  try {
    const userData = await authService.register(user);
    console.log("HAT", userData);

    return userData;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message: string = (
        error.response &&
        error.response.data &&
        error.response.data.message
      )(error.response && error.response.data && error.response.data.detail);
      error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

// Login user
export const login = createAsyncThunk<
  any,
  ILogin,
  {
    rejectValue: string;
  }
>("auth/login", async (user, thunkAPI) => {
  try {
    const userData = await authService.login(user);

    return userData;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message: string = (
        error.response &&
        error.response.data &&
        error.response.data.message
      )(error.response && error.response.data && error.response.data.detail);
      error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  //await axios.post("auth/logout");
  AsyncStorage.removeItem("user");
  //await axios.post(API_URL + "auth/logout");

  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log("payload", action.payload);
        state.user = action.payload;
      })
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
