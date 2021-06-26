import { UserModel } from "domain/models/user/user";

import React from "react";

export interface UserContextProps {
  user?: UserModel;
  setUser: React.Dispatch<React.SetStateAction<UserModel | undefined>>;
}
