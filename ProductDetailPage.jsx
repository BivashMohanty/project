import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import DispatchCart from './DispatchCart'; 

const ProductDetailPage = ({ route }) => {
  const { product } = route.params; 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <DispatchCart item={product} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ProductDetailPage;
