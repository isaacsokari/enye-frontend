import React from 'react';

import './dropdown-filter.scss';

const DropdownFilter = ({ id, label, onChange, optionsSource }) => {
  return (
    <div className="dropdown-filter">
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={onChange}>
        <option value="">None</option>
        {Array.from(optionsSource)
          .sort()
          .map((option, idx) => (
            <option value={option} key={idx}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
