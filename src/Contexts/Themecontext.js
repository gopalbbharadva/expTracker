import React, { createContext, useState } from "react";

export const themeContext = createContext();

function ThemeContextProvider(props) {
  let theme = {
    light: {
      textColor: "black",
      bgColor: "white",
      borderColor: "black",
      formBG: "#E5E7EB",
    },
    dark: {
      textColor: "white",
      bgColor: "black",
      borderColor: "white",
      formBG: "#4B5563",
    },
  };
  let [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => {
    setLightTheme(!isLightTheme);
  };
  return (
    <themeContext.Provider value={{ ...theme, isLightTheme, toggleTheme }}>
      {props.children}
    </themeContext.Provider>
  );
}
export default ThemeContextProvider;
