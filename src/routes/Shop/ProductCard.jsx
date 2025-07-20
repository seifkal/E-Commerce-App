import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-lg shadow-md border p-4 flex flex-col items-center hover:shadow-lg transform transition-transform duration-200 hover:scale-105 min-h-96"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 object-contain mb-2"
      />
      <h2 className="font-semibold text-lg mb-2 text-center line-clamp-2">{product.title}</h2>
      <div className="flex items-center mb-2">
        <StarRatings
          rating={product.rating.rate}
          starDimension="18px"
          starSpacing="1px"
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
        />
        <span className="ml-2 text-sm text-gray-600">({product.rating.count})</span>
      </div>
      <p className="font-bold text-xl mb-2 text-black">${product.price}</p>
    </Link>
  );
}