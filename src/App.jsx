import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const initialQuantity = 0;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
        setSelectedProduct(Array(data.length + 1).fill(initialQuantity)); 
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header onCartClick={() => setCartOpen(true)} />
        <main className='flex-1'>
          <Outlet context={{ products, loading, selectedProduct, setSelectedProduct }} />
        </main>
      </div>
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
          onClick={() => setCartOpen(false)}
        />
      )}
      <ShoppingCart open={cartOpen} onClose={() => setCartOpen(false)} products={products} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
      <Footer />
    </>
  )
}

export default App;