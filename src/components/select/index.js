import React, { useState } from 'react';

import Select from 'react-dropdown-select';

function SelectContainer() {
  const [lg, setLg] = useState('');
  const options = [
    { value: 'en', label: 'English' },
    { value: 'fn', label: 'Frances' }
  ];

  const handleInputChange = (selected) => {
    setLg(selected[0].value);
  };
  return <div></div>;
}

export default SelectContainer;
