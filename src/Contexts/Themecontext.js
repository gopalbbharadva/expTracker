import React, { createContext, useState } from "react";

export const themeContext = createContext();

function ThemeContextProvider(props) {
  let [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => {
    setLightTheme(!isLightTheme);
  };
  return (
    <themeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {props.children}
    </themeContext.Provider>
  );
}
export default ThemeContextProvider;
