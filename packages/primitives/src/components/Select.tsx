import React from 'react';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
};

export const Select = ({ options }: SelectProps) => {
  return (
    <div className="search-results-info">
      <select className="dropdown">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
