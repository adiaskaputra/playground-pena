import React from 'react';
import {WebView} from 'react-native-webview';
import {SITE_URL} from '@env';

const MyWebView = () => {
  const handleMessage = event => {
    const data = JSON.parse(event.nativeEvent.data)
    console.log('Pesan dari WebView:', data.action);
  };

  return (
    <WebView
      source={{uri: SITE_URL}} // Ganti dengan URL halaman web Anda
      onMessage={handleMessage} // Menerima pesan dari WebView
    />
  );
};

export default MyWebView;
