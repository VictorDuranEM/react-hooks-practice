import { useContext } from "react";
import { useTheme, useToggleTheme } from "./ThemeProvider";

export default function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useToggleTheme();
  const color = darkTheme ? 'black' : 'white';
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1 style={{ backgroundColor: color }}>adsf</h1>
    </div>
  )
}