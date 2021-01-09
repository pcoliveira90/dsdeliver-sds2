import React, { useEffect, useState } from 'react';
import {StyleSheet,  ScrollView, Alert,ActivityIndicator,View} from 'react-native';
import Reader from '../Header';
import OrderCard from '../OrderCard';
import fetchOrders from '../api'
import { Order } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Orders(){

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect (()=>{
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(error => Alert.alert("Ocorreu um erro insperado ao buscar os pedidos!"))
      .finally(()=> setIsLoading(false))
  },[])

    return (
    <>
      <Reader/>
      <ScrollView style={styles.container}>
          {
            isLoading ? 
            (
              <View style={styles.horizontal}>
                <ActivityIndicator size="large" color="#DA5C5C" />
              </View>
            ) :
            ( orders.map(order =>
              <TouchableWithoutFeedback key={order.id}>
                <OrderCard order={order}/>
              </TouchableWithoutFeedback>)
            )
          }
      </ScrollView>
    </>     
    );
}

const styles = StyleSheet.create({
  container:{
    paddingRight:'5%',
    paddingLeft: '5%'
  },

  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    paddingTop:'50%'
  },
  subTitle: {
    color: '#9E9E9E',
    fontSize: 16,
    marginTop: 15,
    lineHeight: 22,
    textAlign: 'center'
}
})

export default Orders;