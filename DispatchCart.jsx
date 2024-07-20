import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ShoppingContext } from './ShoppingProvider'; 
import { CART_ACTIONS } from '../my-app/actions/cartActions'; 

const DispatchCart = ({ item }) => {
  const { dispatchCart } = useContext(ShoppingContext);

  const addItemToCart = () => {
    dispatchCart({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: item,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <TouchableOpacity style={styles.button} onPress={addItemToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#00CCCD',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default DispatchCart;
