import { createContext } from "react";

const ThemeContext = createContext("green", () => {});
// console.log("What about you", ThemeContext);

export default ThemeContext;
