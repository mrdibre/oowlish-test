import React from "react";

import { UserModel } from "domain/models/user/user";

export interface UserContextProps {
  user?: UserModel;
  setUser: React.Dispatch<React.SetStateAction<UserModel | undefined>>;
}
