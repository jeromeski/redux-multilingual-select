import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslate } from 'react-redux-multilingual';
import SelectDropdown from '../../select/components/SelectDropdown';

export default function Vegetables() {
  const locale = useSelector((state) => state.Intl);
  const translate = useTranslate();

  const dispatch = useDispatch();

  console.log(locale);
  console.count('Vegetable :');

  return (
    <div>
      <h1>{translate('call_us')}</h1>
      <SelectDropdown />
    </div>
  );
}
