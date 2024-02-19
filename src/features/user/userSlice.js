import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { server } from "../../server";

const initialState = {
  isLoading: false,
  user: null,
  message: null,
  isError: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const { name, email, password, passwordConfirm, passwordChangedAt } =
        user;
      const res = await axios.post(`${server}/user/create-uer`, {
        name,
        email,
        password,
        passwordConfirm,
        passwordChangedAt,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const activateUser = createAsyncThunk(
  "user/activateUser",
  async (activation_token, thunkAPI) => {
    try {
      const res = await axios.post(`${server}/user/activation`, {
        activation_token,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const res = await axios.post(
        `${server}/user/login-user`,
        { email: user.email, password: user.password },
        { withCredentials: true }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.success) {
          state.isError = false;
          state.message = payload.message;
          toast.success(payload.message);
        }
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        toast.error(payload);
      })
      .addCase(activateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(activateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.success) {
          state.isError = false;
          state.user = payload.user;
          state.message = "Your account is activated successfully!";
          toast.success(state.message);
        }
      })
      .addCase(activateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        toast.error(payload);
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
