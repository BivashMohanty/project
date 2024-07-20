import React, { useContext } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ShoppingContext } from './ShoppingContext';
import { CART_ACTIONS } from '../my-app/actions/cartActions';

const Card = ({ item }) => {
  const { dispatchCart } = useContext(ShoppingContext);

  return (
    <View style={[styles.cardContainer, styles.productCollectionItem]}>
      <View>
        <Image style={styles.cardImage} source={{ uri: item.image }} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.description}</Text>
        <Text style={styles.cardDesc}>MRP: {item.price}</Text>
        <Text style={styles.cardDesc}>Discount: {item.discount}%</Text>
      </View>
      <View style={styles.cardActions}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            dispatchCart({ type: CART_ACTIONS.ADD_TO_CART, payload: item });
          }}
        >
          <Text style={styles.btnText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'stretch',
    flexBasis: 'auto',
    flexShrink: 1,
  },
  productCollectionItem: {
    padding: 16,
    borderRadius: 16, 
    backgroundColor: '#f4f3e7', 
    
  },
  cardImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    elevation: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 16,
    lineHeight: 20,
  },
  cardActions: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'dodgerblue',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
});

export default Card;
