import React from 'react';

function SelectDropdown() {
  return (
    <div>
      <Select
        options={options}
        onChange={(values) => handleInputChange(values)}
      />
    </div>
  );
}

export default SelectDropdown;
