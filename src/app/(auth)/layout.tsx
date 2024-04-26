import { ReactNode, FC } from "react";

interface IAuthLayout {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayout> = ({ children }) => {
  return <div className="rounded-md">{children}</div>;
};

export default AuthLayout;
