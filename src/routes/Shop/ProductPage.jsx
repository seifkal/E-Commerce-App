import { useParams, useOutletContext } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useState } from "react";
import QuantityInput from "../../components/QuantityInput";

export default function ProductPage() {
    const { id } = useParams();
    const { products, loading , setSelectedProduct} = useOutletContext();
    const [quantity, setQuantity] = useState(1);

    function handleClick(){
        setSelectedProduct(prev => {
            const newSelectedProduct = [...prev];
            newSelectedProduct[id] += quantity;
            return newSelectedProduct;
        });
    }

    if (loading) return <p>Loading...</p>;

    const product = products.find(p => p.id == id);

    if (!product) return <p>Product not found.</p>;

    return (
        <div className="p-12">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-12 flex flex-col md:flex-row gap-12 items-center md:items-start min-h-[32rem]">
                <div className="w-full md:w-2/5 flex-shrink-0 flex justify-center">
                    <img src={product.image} alt={product.title} className="w-full h-[28rem] object-contain" />
                </div>
                <div className="w-full md:w-3/5">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <div className="flex items-center mb-4">
                        <StarRatings rating={product.rating.rate} starDimension="24px" starSpacing="2px" starRatedColor="gold" />
                        <span className="ml-2 text-base text-gray-600">({product.rating.count})</span>
                    </div>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="font-bold text-4xl mb-4 text-black">${product.price}</p>
                    <QuantityInput value={quantity} onChange={setQuantity} min={1} max={99}/>
                    <button onClick={handleClick} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors cursor-pointer w-32">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}