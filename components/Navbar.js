import Link from "next/link";
export default function Navbar({ setDarkTheme, darkTheme }) {
    return (
        <div className="container">
            <div className="py-5 flex flex-wrap justify-between itms-center">
                <Link href="/">
                    <a className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded block">
                        Zoggl
                    </a>
                </Link>
                <button
                    type="button"
                    onClick={() => setDarkTheme(!darkTheme)}
                    className="text-xl dark:bg-grey-50 dark:text-grey-900 bg-white border rounded-full block px-2 py-1 hover:shadow-lg transition-all duration-200"
                >
                    {darkTheme ? "Light 💡" : "Dark 🌙"}
                </button>
            </div>
        </div>
    );
}
