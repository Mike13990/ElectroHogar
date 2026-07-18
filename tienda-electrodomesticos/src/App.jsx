import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Lavadoras from './components/Lavadoras';
import Refrigeradores from './components/Refrigeradores';
import Estufas from './components/Estufas';
import Carrito from './components/Carrito';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [currentSection, setCurrentSection] = useState('inicio');
  const addToCart = (producto) => {
    setCartItems(prev => [...prev, producto]);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Navbar 
        toggleCart={toggleCart} 
        onNavigate={setCurrentSection} 
        activeSection={currentSection} 
        cartItems={cartItems}
      />
      
      <main>
        {currentSection === 'inicio' && <Home addToCart={addToCart} />}
        {currentSection === 'lavadoras' && <Lavadoras addToCart={addToCart} />}
        {currentSection === 'refrigeradores' && <Refrigeradores addToCart={addToCart} />}
        {currentSection === 'estufas' && <Estufas addToCart={addToCart} />}
      </main>

      <Footer />
      
      <Carrito 
        show={showCart} 
        handleClose={() => setShowCart(false)} 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart}
      />
    </>
  );
}

export default App;