import "../styles/globals.css";
import { ResultContextProvider } from "@/context/ResultContextProvider";

function MyApp({ Component, pageProps }) {
    return (
        <ResultContextProvider>
            <Component {...pageProps} />
        </ResultContextProvider>
    );
}

export default MyApp;
