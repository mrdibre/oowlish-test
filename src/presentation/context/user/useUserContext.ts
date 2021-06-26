import { useContext } from "react";

import userContext from "./context";
import { UserContextProps } from "./types";

const useUserContext = () => useContext<UserContextProps>(userContext);

export default useUserContext;
