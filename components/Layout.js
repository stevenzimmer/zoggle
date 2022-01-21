import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children }) {
    const [darkTheme, setDarktheme] = useState(false);
    return (
        <div className={darkTheme ? "dark" : ""}>
            <Navbar setDarkTheme={setDarktheme} darkTheme={darkTheme} />
            {children}
            <Footer />
        </div>
    );
}
