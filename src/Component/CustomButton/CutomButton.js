import React from 'react';

const CustomButton = ({ children, ...otherProps }) => (
  <button className='red_btn full_width_btn' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
