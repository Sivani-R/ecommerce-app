import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';


const productsData = [
  { id: 1, name: 'Snake Plant', price: 'Rs.1000', image: 'https://img.freepik.com/premium-photo/decorative-house-plant-images_1095465-5858.jpg?w=740' },
  { id: 2, name: 'Nest & Vine Plant', price: 'Rs.1440', image: 'https://img.freepik.com/free-photo/colour-flowers-white-pot-isolated-white_231208-2933.jpg?w=360' },
  { id: 3, name: 'Calathea Medallion Plant', price: 'Rs.1200', image: 'https://img.freepik.com/premium-photo/decorative-house-plant-images_1095465-5853.jpg?w=740' },
  { id: 4, name: 'Green Plant', price: 'Rs.800', image: 'https://img.freepik.com/premium-photo/decorative-house-plant-images_1095465-5871.jpg?w=740' },
  { id: 5, name: 'Monstera Deliciosa Plant', price: 'Rs.2200', image: 'https://img.freepik.com/premium-photo/decorative-house-plant-images_1095465-5856.jpg?w=740' },
  { id: 6, name: 'Peace Lily Plant', price: 'Rs.1500', image: 'https://img.freepik.com/premium-photo/decorative-house-plant-images_1095465-5870.jpg?w=740' },
  { id: 7, name: 'Sweet William Plant', price: 'Rs.2500', image: 'https://img.freepik.com/premium-photo/flower-pot-with-pink-flowers-it-white-background_1089151-201924.jpg?w=740' },
  { id: 8, name: 'Snapdragon Plant', price: 'Rs.3000', image: 'https://img.freepik.com/premium-photo/blue-vase-with-pink-flowers-it-green-plant-it_1208742-1837.jpg?w=900' },
  { id: 9, name: 'Palm Plant', price: 'Rs.1600', image: 'https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024953.jpg?t=st=1729333039~exp=1729336639~hmac=3e0f825b2b1188ff0ad8c9241a3c3c996be775cede78af31f75cb94794642ba3&w=826' },
  { id: 10, name: 'Aloe Vera Plant', price: 'Rs.2600', image: 'https://img.freepik.com/free-photo/green-leaf-bokeh-with-beautiful-soft-sunlight_1150-13666.jpg?t=st=1729333241~exp=1729336841~hmac=af3790e2c3f1f71e57696003e2711f7e0775903ae304705652f9639350e54992&w=900' },
  { id: 11, name: 'Paradise Plant', price: 'Rs.4500', image: 'https://img.freepik.com/premium-photo/decorative-house-plant-images_1095465-5866.jpg?w=740' },
  { id: 12, name: 'Watermelon Peperomia Plant', price: 'Rs.3000', image: 'https://img.freepik.com/free-photo/faux-watermelon-peperomia-plant-gray-pot_53876-110373.jpg?t=st=1729334108~exp=1729337708~hmac=478d035e45cd82b3455bed49cd285fae5c9505279351f9d09fc77d3c2c4ba224&w=740' },
  // Add more mock products as needed
];

const PRODUCTS_PER_PAGE = 4; // Customize the number of products per page

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalProduct, setModalProduct] = useState(null);

  // Logic to get the products for the current page
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = productsData.slice(startIndex, endIndex);

  const handleAddToCart = (product) => {
    setModalProduct(product);
  };

  const handleModalClose = () => {
    setModalProduct(null);
  };

  const totalPages = Math.ceil(productsData.length / PRODUCTS_PER_PAGE);

  return (
    <div>
      <Header />
      <div className="product-grid">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      {modalProduct && <AddToCartModal product={modalProduct} onClose={handleModalClose} />}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default ProductListing;
