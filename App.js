import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';

export default function App() {
  const [countries, setDataCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setDataCountries(res)
        console.log(res);
      })
  }, [])

  return countries.length > 0 === true ? <FlatList
    style={{ margin: 100 }}
    data={countries}
    renderItem={(data) => <CountryCard country={data.item} />}
    keyExtractor={(data, index) => index.toString()}
    ListHeaderComponent={() => <Text>Welcome</Text>}
    ListFooterComponent={() => <Text>Thank you for using the app</Text>}
    ItemSeparatorComponent={() => (
      <View style={{ borderBottomWidth: 1 }}></View>
    )}
  /> : <Text>Loading...</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
