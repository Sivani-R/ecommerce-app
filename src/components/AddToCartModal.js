import React from 'react';

const AddToCartModal = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm Add to Cart</h2>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <button onClick={onClose}>Confirm</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
