import {View, TextInput, StyleSheet} from 'react-native';

export interface PropsSearchComponent {
  searchQuery: string;
  setSearchQuery: (data: string) => void;
}

export const SearchComponent = ({
  searchQuery,
  setSearchQuery,
}: PropsSearchComponent) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 10, width: '100%', marginTop: 10, color: 'black'},
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 8,
    color: 'black',
  },
});

export default SearchComponent;
