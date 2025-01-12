import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterReducer,
  },
});

// selector 参数类型定义
type IRootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const appShallowEqual = shallowEqual;

export default store;
