/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import { RootState } from "./store";

interface AppState {
  UI: {
    darkTheme: boolean;
  };
}

const initialState: AppState = {
  UI: {
    darkTheme: false,
    // window.matchMedia &&
    // window.matchMedia("(prefers-color-scheme: dark)").matches,
  },
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (state: AppState) => {
      state.UI.darkTheme = !state.UI.darkTheme;
    },
  },
});

export const { toggleTheme } = AppSlice.actions;

export const selectUI = (state: RootState): AppState["UI"] => state.app.UI;

export default AppSlice.reducer;
