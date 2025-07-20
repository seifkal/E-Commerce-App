import React from "react";
import QuantityInput from "./QuantityInput";

export default function ShoppingCart({ open, onClose, products, selectedProduct, setSelectedProduct }) {
  // Filter products with quantity > 0
  const cartItems = products.filter(
    (product) => selectedProduct[product.id] > 0
  );

  // Calculate total sum
  const total = cartItems.reduce(
    (sum, product) => sum + product.price * selectedProduct[product.id],
    0
  );

  // Handle quantity change
  const handleQuantityChange = (id, qty) => {
    setSelectedProduct(prev => {
      const updated = [...prev];
      updated[id] = qty;
      return updated;
    });
  };

  // Handle remove item
  const handleRemove = (id) => {
    setSelectedProduct(prev => {
      const updated = [...prev];
      updated[id] = 0;
      return updated;
    });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      style={{ boxShadow: "-2px 0 8px rgba(0,0,0,0.1)" }}
      onClick={e => e.stopPropagation()}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black text-2xl font-bold"
          aria-label="Close cart"
        >
          &times;
        </button>
      </div>
      <div className="flex flex-col h-[calc(100%-112px)]"> {/* 112px = header (64px) + footer (48px) */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center mt-8">Your cart is empty.</p>
          ) : (
            cartItems.map((product) => (
              <div key={product.id} className="relative flex items-center mb-6 bg-gray-50 rounded-lg p-3 pt-6">
                {/* Remove button at top right, slightly above the title */}
                <button
                  onClick={() => handleRemove(product.id)}
                  className="absolute top-0 right-2 text-gray-400 hover:text-red-600 transition-colors p-1"
                  aria-label="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img src={product.image} alt={product.title} className="w-12 h-12 object-contain mr-4" />
                <div className="flex-1">
                  <div className="font-semibold line-clamp-1 mb-1">{product.title}</div>
                  <div className="flex items-center space-x-3 mt-1">
                    <QuantityInput
                      value={selectedProduct[product.id]}
                      onChange={qty => handleQuantityChange(product.id, qty)}
                      min={1}
                      max={99}
                    />
                    <span className="text-black font-bold text-base">${(product.price * selectedProduct[product.id]).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Sticky footer */}
        <div className="border-t p-4 bg-white sticky bottom-0 z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-lg">Total:</span>
            <span className="font-bold text-xl">${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
} 