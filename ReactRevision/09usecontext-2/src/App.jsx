import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
      {/* <p>Choose your fav programming lang</p>
      <form>
        <label htmlFor="js">JavaScript</label>
        <input id="js" name="fav-lang" value={"javascript"} type="radio" />
        <br />
         <label htmlFor="cpp">C Plus Plus</label>
        <input id="cpp" name="fav-lang" value={"cpp"} type="radio" />
        <br />
         <label htmlFor="py">Python</label>
        <input id="py" name="fav-lang" value={"pyhton"} type="radio" />
      </form> */}
    </ThemeProvider>
  );
}

export default App;
