import React from 'react';
import CategoryList from './CategoryList';

function Refrigeradores({ addToCart }) {
  return <CategoryList category="refrigeradores" title="Refrigeradores" addToCart={addToCart} />;
}
export default Refrigeradores;