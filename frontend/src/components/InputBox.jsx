// src/components/common/InputBox.jsx

import React from 'react';
import PropTypes from 'prop-types';

export function InputBox({ label, placeholder, onChange, className }) {
  return (
    <div className={`input-box ${className}`}>
      <div className="text-left text-sm font-medium py-1">{label}</div>
      <input type="text" placeholder={placeholder} onChange={onChange} className= "block w-full border-0 bg-[#1D2432] rounded-md py-1.5 ring-1 ring-inset ring-[#334b92] focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-2" />
    </div>
  );
}

// InputBox.propTypes = {
//   label: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   onChange: PropTypes.func,
//   className: PropTypes.string,
// };

// InputBox.defaultProps = {
//   placeholder: '',
//   onChange: () => {},
//   className: '',
// };

export default InputBox;
