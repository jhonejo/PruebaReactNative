import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getProducts} from '../../../actions/products';
import ProductItem from '../../../components/ProductItem/ProductItem';
import SearchComponent from '../../../components/SearchComponent/SearchComponent';

export const ListProducts = () => {
  const [dataProducts, setDataProducts] = useState<any>([]);
  const [dataProductsAux, setDataProductsAux] = useState<any>([]);
  const [valueSearch, setValueSearch] = useState('');

  async function handleGetProducts() {
    const response: any = await getProducts();

    if (response !== undefined) {
      setDataProducts(response);
      setDataProductsAux(response);
    } else {
      setDataProducts([]);
    }
  }

  useEffect(() => {
    handleGetProducts();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [valueSearch]);

  const handleSearch = () => {
    const filteredProducts = dataProducts.filter((product: any) =>
      product.name.toLowerCase().includes(valueSearch.toLowerCase()),
    );

    if (filteredProducts.length > 0) {
      setDataProducts(filteredProducts);
    } else {
      setDataProducts(dataProductsAux);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Banco</Text>

      <SearchComponent
        searchQuery={valueSearch}
        setSearchQuery={setValueSearch}
      />

      <Text style={styles.count}>
        Cantidad de registros: {dataProducts.length}
      </Text>

      <FlatList
        data={dataProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    color: 'black',
  },

  head: {
    flex: 1,
    top: 0,
    position: 'absolute',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eceff3',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#075484',
    padding: 5,
  },
  count: {padding: 10, fontWeight: 'bold', color: 'black'},
});
