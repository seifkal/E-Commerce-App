import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import ProductPage from './Shop/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: "/", element:<Home />},
      {path: "/shop", element: <Shop />},
      {path: "/product/:id", element: <ProductPage />}
    ]
  },
]);

export default router; 