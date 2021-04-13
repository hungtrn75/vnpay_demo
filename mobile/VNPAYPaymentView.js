import axios from 'axios';
import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const VNPAYPaymentView = ({route, navigation}) => {
  const {url} = route.params || {};
  const webview = useRef();

  const handleWebViewNavigationStateChange = async newNavState => {
    const {url} = newNavState;
    console.log(url);
    if (!url) return;

    if (url.includes('vnp_ResponseCode=00')) {
      webview.current.stopLoading();
      const params = url.split('?');
      const param = params[params.length - 1];
      const res = await axios.get(
        `http://localhost:8888/order/vnpay_ipn?${param}`,
      );
      console.log('vnpay_ipn', res.data);
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <WebView
        ref={webview}
        source={{uri: url}}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        scalesPageToFit={false}
      />
    </SafeAreaView>
  );
};

export default VNPAYPaymentView;

const styles = StyleSheet.create({});
