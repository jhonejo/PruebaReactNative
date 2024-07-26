import {SafeAreaView} from 'react-native';
import {ListProducts} from './src/presentation/screens/ListProducts/ListProducts';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ListProducts />
    </SafeAreaView>
  );
};

export default App;
