import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
//Register User
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post("/api/users/register", userData);
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    } catch (err) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const logout=createAsyncThunk('auth/logout',async()=>
{
  await localStorage.removeItem('user');
  return null;

})
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isLoading = false),
        (state.isError = false),
        (state.isSuccess = false),
        (state.message = "");
    },
  },
  extraReducers: (builder) => {   //to handle createAsyncThunk
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state,action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state,action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload; //err message
        state.user=null
      })
      .addCase(logout.fulfilled,(state,action)=>
      {
        state.user=action.payload
      })
  },
});
export const { reset } = authSlice.actions;
export const authReducer= authSlice.reducer;
