import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { testMessage } from '../../../redux/actions/test';
import {
  IntlActions as Intl,
  IntlProvider,
  useTranslate
} from 'react-redux-multilingual';

export default function Vegetables() {
  const locale = useSelector((state) => state.Intl);
  const translate = useTranslate();

  const dispatch = useDispatch();

  console.log(locale);
  console.count('Vegetable :');

  return (
    <div>
      <h1>{translate('call_us')}</h1>
    </div>
  );
}
