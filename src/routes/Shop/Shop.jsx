import { useOutletContext } from "react-router-dom"
import ProductCard from "./ProductCard"
import Loading from "../../components/Loading"

export default function Shop(){
    const {products, loading} = useOutletContext();
    console.log(products);

    if (loading) return <Loading />;
    return (
        <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.slice(0, 20).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}