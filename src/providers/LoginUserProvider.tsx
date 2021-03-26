import {
  useState,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction
} from "react";

import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  LoginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [LoginUser, setLoginUser] = useState<LoginUser | null>();
  return (
    <LoginUserContext.Provider value={{ LoginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
