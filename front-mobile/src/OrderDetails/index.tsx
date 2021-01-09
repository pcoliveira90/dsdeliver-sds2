import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View ,Text,StyleSheet, Alert} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';


type Props={
    route :{
        params:{
            order : Order;
        }
    }
}

function OrderDetails({route} : Props){
    const navigation = useNavigation();
    const {order} = route.params;
    
    const handleConfirmDelivery=()=>{
        confirmDelivery(order.id)
        .then(()=>{
            Alert.alert(`Pedido Nº ${order.id} confirmado com sucesso!`);
            navigation.navigate('Orders');
        })
        .catch(()=>{
            Alert.alert(`Não foi possível confirmar o pedido Nº ${order.id}!`);
        })
    }
    
    const handleOnCancel=()=>{
        navigation.navigate('Orders');
    }

    const handleOnNavigation=()=>{
        navigation.navigate('Orders');
    }
    return(
        <>
            <Header />
            <View style={styles.container}>
                <OrderCard order={order}/>
                <RectButton 
                    onPress={handleOnCancel}
                    style={styles.button}>
                        <Text
                            style={styles.buttonText}>
                                Iniciar navegação
                        </Text>
                    </RectButton>
                <RectButton 
                        onPress={handleConfirmDelivery}
                        style={styles.button}>
                        <Text
                            style={styles.buttonText}>
                                Confirmar entrega
                        </Text>
                </RectButton>
                <RectButton 
                        onPress={handleOnCancel}
                        style={styles.button}>
                        <Text
                            style={styles.buttonText}>
                                Cancelar
                        </Text>
                </RectButton>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24,
        fontFamily: 'OpenSans_700Bold'
    }
});

export default OrderDetails;