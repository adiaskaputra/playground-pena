import React from 'react';
import Pena from '@privyid/pena-react-native';
import {SITE_URL} from '@env';

export default function App() {
  return (
    <Pena
      url={SITE_URL}
      lang="id"
      signature={{
        x: 100,
        y: 200,
        page: 1,
        fixed: false,
      }}
      onAfterAction={payload => {
        // showToast(payload.action)
        console.log('Action: ', payload.action);
      }}
    />
  );
}
