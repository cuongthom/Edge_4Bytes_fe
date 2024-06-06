import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../index.ts";
import { useCallback } from "react";
import { removeUser, setUser, UserStateType } from "./reducers.ts";

export const useUserState = () => {
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const onSetUser = useCallback((user: UserStateType) => {
    dispatch(setUser(user));
  }, [dispatch]);

  const onRemoveUser = useCallback(() => {
    dispatch(removeUser());
  }, [dispatch]);

  return {
    user,
    onSetUser,
    onRemoveUser,
  };
};
