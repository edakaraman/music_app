import { SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import styles from "./SearchBar.styles"

const SearchBar = ({onSearch}) => {

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Search.." onChangeText={onSearch}
      /> 
    </SafeAreaView>
  )
}

export default SearchBar