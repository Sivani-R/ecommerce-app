import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/thank-you/${product.id}`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <h2>{product.price}</h2>
      <div className='two-buttons'>
         <button onClick={handleViewProduct}>View Product</button>
         <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
