import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { IntlActions as Intl } from 'react-redux-multilingual';

function SelectDropdown() {
  const locale = useSelector((state) => state.Intl);
  console.log(locale)
  const [selected, setSelected] = useState(locale);

  const options = [
    { value: 'en', label: 'English' },
    { value: 'fn', label: 'French' }
  ];

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(Intl.setLocale(selected.value));
  }, [selected, dispatch]);

  const changeLang = (selected) => {
    setSelected(selected);
  };

  console.log(selected);
  console.count('SelectDropdown Rendered');
  return (
    <div>
      <Select 
        value={selected} 
        onChange={changeLang} 
        options={options} 
        />
    </div>
  );
}

export default SelectDropdown;
