import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    justifyContent: 'center',
    padding:10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  content_container: {
    flexDirection: 'row',
  },
  info_container: {
    flexDirection: 'row',
  },
  artist: {
    fontWeight: 'bold',
  },
  year: {
    color: 'gray',
    marginLeft: 10,
    marginRight:10,
    fontWeight: 'bold',
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: '#D21312',
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: '#D21312',
    alignSelf:'flex-end',
    fontSize:13,
  },
  
});
