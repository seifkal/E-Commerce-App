import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"

export default function Header({ onCartClick }) {
    return (
        <nav className="w-full shadow flex items-center justify-between px-8 py-4 sticky top-0 z-50 bg-white/80 backdrop-blur">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" className="w-24 sm:w-auto h-auto"/>
                </Link>
            </div>
            <div className="flex-1 flex justify-end">
                <ul className="flex space-x-8 text-lg font-light items-center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li>
                        <button
                            onClick={onCartClick}
                            className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            aria-label="Open shopping cart"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.385a2.25 2.25 0 002.183 1.693h7.063a2.25 2.25 0 002.183-1.693l1.7-6.385m-13.216 0h13.216m-9.216 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}