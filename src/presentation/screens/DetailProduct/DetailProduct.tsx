import {View, Text, Button, StyleSheet} from 'react-native';

export function DetailProduct({route}: any) {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Text>ID: {product.id}</Text>
      <Text>Nombre: {product.name}</Text>
      <Text>Descripción: {product.description}</Text>
      <Text>Logo: {product.logo}</Text>
      <Text>Fecha de liberación: {product.releaseDate}</Text>
      <Text>Fecha de revisión: {product.reviewDate}</Text>
      <Button title="Editar" onPress={() => console.log('Editar')} />
      <Button title="Eliminar" onPress={() => console.log('Eliminar')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
});

export default DetailProduct;
