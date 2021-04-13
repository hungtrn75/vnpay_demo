import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import OrderView from './OrderView';
import VNPAYPaymentView from './VNPAYPaymentView';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="float" initialRouteName={'ORDER'}>
        <Stack.Screen
          component={OrderView}
          key="ORDER"
          name="ORDER"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={VNPAYPaymentView}
          key="VNPAY_PAYMENT"
          name="VNPAY_PAYMENT"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
