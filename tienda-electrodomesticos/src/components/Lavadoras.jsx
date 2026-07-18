import React from 'react';
import CategoryList from './CategoryList';

function Lavadoras({ addToCart }) {
  return <CategoryList category="lavadoras" title="Lavadoras" addToCart={addToCart} />;
}
export default Lavadoras;