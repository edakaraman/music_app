import { FlatList, StyleSheet, SafeAreaView, View ,Text} from 'react-native';
import song_json from './songCards_data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';
import React,{useState} from 'react'


export default function App() {
  const renderSong = ({ item }) => <SongCard song={item} />;
  const itemSeperator = () => <View style={styles.seperator} />;

   const [list,setList] = useState(song_json);
   
   const handleSearch = (text) => {
    const filteredList = song_json.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      
      return currentTitle.indexOf(searchedText) > -1 
    })
    setList(filteredList);
   };
  
  return (
    <SafeAreaView style={styles.container}>
    <SearchBar onSearch={handleSearch}/>
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={itemSeperator}
        />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#ECF2FF',
  },
 
});
