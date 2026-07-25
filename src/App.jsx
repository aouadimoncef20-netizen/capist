/* ============================================
   CAPIST — App Router
   All pages are lazy-loaded for better performance.
   ============================================ */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import { CartProvider } from './Context/CartContext';
import { WishlistProvider } from './Context/WishlistContext';

// Lazy-load pages (they only load when you visit them)
const Home = lazy(() => import('./Pages/Home'));
const ProductCollection = lazy(() => import('./Pages/ProductCollection'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const Lookbook = lazy(() => import('./Pages/Lookbook'));
const Favorites = lazy(() => import('./Pages/Favorites'));
const Cart = lazy(() => import('./Pages/Cart'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const Account = lazy(() => import('./Pages/Account'));
const Contact = lazy(() => import('./Pages/Contact'));
const About = lazy(() => import('./Pages/About'));
const FAQ = lazy(() => import('./Pages/FAQ'));
const AdminDashboard = lazy(() => import('./Pages/AdminDashboard'));
const NotFound = lazy(() => import('./Pages/NotFound'));

// Fallback shown while a page is loading
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] text-label tracking-widest uppercase text-text-muted">
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<ProductCollection />} />
                <Route path="/collections/:category" element={<ProductCollection />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/lookbook" element={<Lookbook />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account" element={<Account />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
