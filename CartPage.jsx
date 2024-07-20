import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { ShoppingContext } from './ShoppingContext';

const CartPage = ({ navigation }) => {
  const { cart } = useContext(ShoppingContext);

  if (cart.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {cart.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.details}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>Price: {item.price}</Text>
            <Text style={styles.discount}>Discount: {item.discount}%</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  emptyCartText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  discount: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default CartPage;
