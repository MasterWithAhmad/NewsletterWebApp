// src/components/Icon.jsx
//import React from 'react';

/**
 * Icon component to display SVG icons.
 * @param {object} props - Component props.
 * @param {string} props.name - The name of the icon.
 * @param {string} props.size - The size of the icon.
 * @param {string} props.color - The color of the icon.
 */

const Icon = ({ name, size = '24px', color = 'currentColor' }) => {
  const icons = {
    home: (
      <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24" width={size} height={size}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    // Add other icons as needed
  };

  return icons[name] || null;
};

import PropTypes from 'prop-types';

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;