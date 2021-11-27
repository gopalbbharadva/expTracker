import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const themeContext = createContext();

function ThemeContextProvider(props) {
  const light = {
    textColor: "black",
    bgColor: "white",
    borderColor: "black",
    formBG: "#4B5563",
  };
  const dark = {
    textColor: "white",
    bgColor: "black",
    borderColor: "white",
    formBG: "#E5E7EB",
  };
  let [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => {
    setLightTheme(!isLightTheme);
  };
  return (
    <themeContext.Provider value={{ light, dark, isLightTheme, toggleTheme }}>
      {props.children}
    </themeContext.Provider>
  );
}
export default ThemeContextProvider;
