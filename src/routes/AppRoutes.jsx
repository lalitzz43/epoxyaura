import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Collection from '../pages/Collection'
import NewArrivals from '../pages/NewArrivals'
import Contact from '../pages/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductDetails from '../components/ProductDetails'

export default function AppRoutes() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home onSelect={setSelectedProduct} />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection onSelect={setSelectedProduct} />} />
          <Route path="/new-arrivals" element={<NewArrivals onSelect={setSelectedProduct} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  )
}

