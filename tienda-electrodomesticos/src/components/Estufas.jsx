import React from 'react';
import CategoryList from './CategoryList';

function Estufas({ addToCart }) {
  return <CategoryList category="estufas" title="Estufas" addToCart={addToCart} />;
}
export default Estufas;