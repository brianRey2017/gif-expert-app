import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddCategory.styles.css';

export const AddCategory = ({ setCategories }) => {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((categories) => [...categories, category]);
    setCategory('');
  };

  return (
    <>
      <h4>Add a category to search</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="category-input"
          value={category}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
