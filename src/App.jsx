import { AddCategory } from 'components/AddCategory.component';
import React, { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory categories={categories} setCategories={setCategories} />
      <ul>
        {categories.map((category) => (
          // WATCH USING KEY WITH INDEX. IT IS VOLATILE
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};
