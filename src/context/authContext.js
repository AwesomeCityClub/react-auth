import { createContext } from "react";

const authContext = createContext();
const { Provider } = authContext;

export { authContext, Provider };
