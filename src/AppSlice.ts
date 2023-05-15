/* eslint-disable no-param-reassign */
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

interface AppState {
  UI: {
    darkTheme: boolean;
  };
}

const initialState: AppState = {
  UI: {
    darkTheme:
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  },
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme: (
      state: AppState,
      action: PayloadAction<AppState["UI"]["darkTheme"]>
    ) => {
      state.UI.darkTheme = action.payload;
    },
  },
});
export const { toggleTheme } = AppSlice.actions;

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectUI = (state: RootState): AppState["UI"] => state.app.UI;
