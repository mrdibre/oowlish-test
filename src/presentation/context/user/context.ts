import { createContext } from "react";

import { UserContextProps } from "./types";

// @ts-ignore
const userContext = createContext<UserContextProps>({});

const { Provider } = userContext;

export { Provider };
export default userContext;
