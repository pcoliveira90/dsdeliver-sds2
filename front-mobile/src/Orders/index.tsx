import React from 'react';
import {StyleSheet,  ScrollView} from 'react-native';
import Reader from '../Header';
import OrderCard from '../OrderCard';

function Orders(){
    return (
    <>
      <Reader/>
      <ScrollView style={styles.container}>
          <OrderCard/>
      </ScrollView>
    </>     
    );
}

const styles = StyleSheet.create({
  container:{
    paddingRight:'5%',
    paddingLeft: '5%'
  }
})

export default Orders;