import "./App.css";
import InputComp from "./Components/InputComp";
import ThemeContextProvider from "./Contexts/Themecontext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <InputComp />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
