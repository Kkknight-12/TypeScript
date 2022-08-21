import {
  TypedUseSelectorHook,
  useSelector as useAppSelector,
} from "react-redux";
import type { RootState } from "../state";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;