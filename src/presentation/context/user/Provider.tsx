import { UserModel } from "domain/models/user/user";

import { FC, PropsWithChildren, useMemo, useState } from "react";

import { Provider as UserProvider } from "./context";

const Provider: FC = ({ children }: PropsWithChildren<any>) => {
  const [user, setUser] = useState<UserModel>();

  const contextValue = useMemo(() => ({ user, setUser }), [user]);

  return <UserProvider value={contextValue}>{children}</UserProvider>;
};

export { Provider };
