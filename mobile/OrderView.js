import axios from 'axios';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const OrderView = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const onGetLink = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        'http://localhost:8888/order/create_payment_url',
        {
          orderType: 'billpayment',
          amount: '100000',
          orderDescription: 'Demo qua VNPAY',
          bankCode: '',
          language: 'vn',
        },
      );
      console.log(res.data);
      if (res.data.code == '00') {
        navigation.navigate('VNPAY_PAYMENT', {
          url: res.data.data,
        });
      }
    } catch (error) {
      console.log(error, {...error});
    } finally {
      setLoading(false);
    }
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
      }}>
      {!loading ? (
        <TouchableOpacity onPress={onGetLink}>
          <Text>Thanh toán</Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator color="black" />
      )}
    </View>
  );
};

export default OrderView;

const styles = StyleSheet.create({});
