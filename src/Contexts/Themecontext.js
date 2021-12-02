import React, { createContext, useState } from "react";

export const themeContext = createContext();

function ThemeContextProvider(props) {
  const light = {
    textColor: "black",
    bgColor: "white",
    borderColor: "black",
    formBG: "#E5E7EB",
  };
  const dark = {
    textColor: "white",
    bgColor: "black",
    borderColor: "white",
    formBG: "#4B5563",
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
