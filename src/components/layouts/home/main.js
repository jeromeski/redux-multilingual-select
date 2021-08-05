import React, { useEffect, useState } from 'react';
import Select from 'react-dropdown-select';
import { useDispatch, useSelector } from 'react-redux';

// import { testMessage } from '../../../redux/actions/test';
import {
  IntlActions as Intl,
  IntlProvider,
  useTranslate
} from 'react-redux-multilingual';

export default function Vegetables() {
  const lang = useSelector((state) => state.Intl);
  const translate = useTranslate();

  const options = [
    { value: 'en', label: 'English' },
    { value: 'fn', label: 'Frances' }
  ];

  const dispatch = useDispatch();

  const handleInputChange = (selected) => {
    if (selected[0].value === 'fn') {
      return dispatch(Intl.setLocale('fn'));
    } else {
      return dispatch(Intl.setLocale('en'));
    }
  };

  console.log(lang);

  return (
    <div>
      <h1>{translate('call_us')}</h1>
      <Select
        options={options}
        onChange={(values) => handleInputChange(values)}
      />
    </div>
  );
}
