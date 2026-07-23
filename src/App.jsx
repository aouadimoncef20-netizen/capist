import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './Layouts/MainLayout';

// Lazy load pages for code splitting
const Home = lazy(() => import('./Pages/Home'));
const Collections = lazy(() => import('./Pages/Collections'));
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

// Loading fallback
const PageLoader = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    fontSize: 'var(--fs-label)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<Collections />} />
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
      </AnimatePresence>
    </Router>
  );
}

export default App;
