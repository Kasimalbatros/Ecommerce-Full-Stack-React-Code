// src/pages/CollectionPage.js
import React, { useState } from 'react';
import './CollectionPage.css';

const CollectionPage = () => {
  const [genderFilter, setGenderFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  // Sample product data
  const products = [
    { id: 1, name: 'Men’s T-shirt', category: 'Men', type: 'Topwear', price: '$25', img: '/images/image1.jpg' },
    { id: 2, name: 'Women’s Dress', category: 'Women', type: 'Topwear', price: '$45', img: '/images/image2.jpg' },
    { id: 3, name: 'Kid’s Sweater', category: 'Kids', type: 'Winterwear', price: '$30', img: '/images/image3.jpg' },
    { id: 4, name: 'Men’s Jeans', category: 'Men', type: 'Bottomwear', price: '$35', img: '/images/image1.jpg' },
    { id: 5, name: 'Women’s Coat', category: 'Women', type: 'Winterwear', price: '$60', img: '/images/image2.jpg' },
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    return (
      (genderFilter === 'All' || product.category === genderFilter) &&
      (typeFilter === 'All' || product.type === typeFilter)
    );
  });

  return (
    <div className="collection-page">
      {/* Filter Section */}
      <div className="filter-section">
        <h3>Filter by Category</h3>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              checked={genderFilter === 'All'}
              onChange={() => setGenderFilter('All')}
            />
            All
          </label>
          <label>
            <input
              type="checkbox"
              checked={genderFilter === 'Men'}
              onChange={() => setGenderFilter('Men')}
            />
            Men
          </label>
          <label>
            <input
              type="checkbox"
              checked={genderFilter === 'Women'}
              onChange={() => setGenderFilter('Women')}
            />
            Women
          </label>
          <label>
            <input
              type="checkbox"
              checked={genderFilter === 'Kids'}
              onChange={() => setGenderFilter('Kids')}
            />
            Kids
          </label>
        </div>

        <h3>Filter by Type</h3>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              checked={typeFilter === 'All'}
              onChange={() => setTypeFilter('All')}
            />
            All
          </label>
          <label>
            <input
              type="checkbox"
              checked={typeFilter === 'Topwear'}
              onChange={() => setTypeFilter('Topwear')}
            />
            Topwear
          </label>
          <label>
            <input
              type="checkbox"
              checked={typeFilter === 'Bottomwear'}
              onChange={() => setTypeFilter('Bottomwear')}
            />
            Bottomwear
          </label>
          <label>
            <input
              type="checkbox"
              checked={typeFilter === 'Winterwear'}
              onChange={() => setTypeFilter('Winterwear')}
            />
            Winterwear
          </label>
        </div>
      </div>

      {/* Product Display Section */}
      <div className="products-section">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
