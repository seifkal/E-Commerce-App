import homebanner from '../../assets/homebanner.jpg'    
import { Link } from 'react-router-dom'

export default function Home(){
    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${homebanner})`, height: 'calc(100vh - 4rem)' }}>
            <div className="flex flex-col items-start justify-center h-full pl-16 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0"></div>
                <div className="relative z-10">
                    <p className="text-white font-extrabold text-6xl font-space-grotesk text-left">One Store.</p>
                    <p className="text-white font-extrabold text-6xl font-space-grotesk text-left mb-6">Endless Choices.</p>
                    <Link to="/shop" className="text-white font-extrabold text-xl font-space-grotesk text-left border p-2">SHOP NOW</Link>
                </div>
            </div>
        </div>
    )
}