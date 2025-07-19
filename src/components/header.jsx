import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="w-full bg-white shadow flex items-center justify-between px-8 py-4">
            <div>Shopping Cart</div>
            <div className="flex-1 flex justify-end">
                <ul className="flex space-x-8 text-lg font-light">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li>          
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.385a2.25 2.25 0 002.183 1.693h7.063a2.25 2.25 0 002.183-1.693l1.7-6.385m-13.216 0h13.216m-9.216 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                    </li>
                </ul>
            </div>
        </nav>
    )
}