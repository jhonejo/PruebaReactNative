import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface PropsProductItem {
  product: any;
}

export function ProductItem({product}: PropsProductItem, {navigation}: any) {
  return (
    <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={styles.container}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>ID: {product.id}</Text>
      </View>
      <View>
        <Text
          onPress={() =>
            navigation.navigate('DetailProduct', {product: product})
          }>
          {'>'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProductItem;
