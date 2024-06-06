import { createSlice } from "@reduxjs/toolkit";

export type UserStateType = {
  id: number,
  username: string,
  email?: string,
  phone?: string,
  name?: string,
  avatar?: string,
  accessToken?: string
}

const initialState: UserStateType = {
  id: 0,
  username: '',
  email: '',
  phone: '',
  name: '',
  avatar: '',
  accessToken: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action) => {
      return action.payload;
    },
    removeUser: () => {
      return initialState;
    },
  }
});

const { actions, reducer } = userSlice;

export const { setUser, removeUser } = actions;
export default reducer;
