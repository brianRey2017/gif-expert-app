import React from 'react';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
  return <div>
    <h3>{category}</h3>
  </div>
};

GifGrid.propTypes = {
  category = PropTypes.string
}
export default GifGrid;
