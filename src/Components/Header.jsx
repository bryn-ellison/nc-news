import { UsernameContext } from "../Contexts/UsernameContext";
import { useContext } from "react";

export const Header = () => {

    const { username, setUsername } = useContext(UsernameContext);

    return (
        <header className="header-container">
            <h1 className="header-title">NC-News</h1>
            <p className="header-login">{UsernameContext._currentValue} is signed in</p>
        </header>
    )
}