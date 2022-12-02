import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export const INITIAL_STATE = {
  userName: "",
  imageURL: "",
  userEmail: "",
};
export interface AuthState {
  userData: any;
}

const initialState: AuthState = {
  userData: INITIAL_STATE,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    updateUser: (state, action: PayloadAction<any>) => {
      state.userData = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = counterSlice.actions;

export default counterSlice.reducer;
