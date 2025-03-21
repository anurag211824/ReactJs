import ThemeContext from "./ThemeContext";
import { useContext } from "react";

const Button = ({children}) => {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {children}
      </button>
    );
}

export default Button
