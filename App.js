import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, SearchBar, Text,PricingCard } from 'react-native-elements';

import HeaderPin from './Components/Header'
// updateSearch = (search) => {
//   this.setState({ search });
// };
export default function App() {
  state = {
    search: '',
  }

  updateSearch = (search) => {
    this.setState({ search });
  };
  const { search } = '';
 
  return (
    
    <View style={styles.container}>
      <HeaderPin />
      <SearchBar
        placeholder="Type Here..."
        // onChangeText={this.updateSearch}
        // value={search}
      />

      <PricingCard
  color="#4f9deb"
  title="Free"
  price="$0"
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
