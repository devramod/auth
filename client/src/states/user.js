import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: "",
    fname: "",
    lname: "",
    email: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    occupation: "",
    image: "",
    isLoggedIn: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user._id = action.payload._id;
      state.user.fname = action.payload.fname;
      state.user.lname = action.payload.lname;
      state.user.email = action.payload.email;
      state.user.country = action.payload.country;
      state.user.state = action.payload.state;
      state.user.city = action.payload.city;
      state.user.phone = action.payload.phone;
      state.user.occupation = action.payload.occupation;
      state.user.image = action.payload.image;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user._id = "";
      state.user.fname = "";
      state.user.lname = "";
      state.user.email = "";
      state.user.country = "";
      state.user.state = "";
      state.user.city = "";
      state.user.phone = "";
      state.user.occupation = "";
      state.user.image = "";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
