import React from 'react';
import {StyleSheet, View, TextInput,FlatList ,Button,Text,Alert } from 'react-native';
import films from '../Helpers/filmsData';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/TMDBapi';
class Search extends React.Component {

   _affiche(){Alert.alert('mohamed aymen');}


   _loadFilms() {
       getFilmsFromApiWithSearchedText("drive").then(data => console.log(data));
   }


    render() {


        return (


            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
            <View style={styles.main_container}>
      <TextInput placeholder='Titre du film'  style={styles.textinput} placeholder='Titre du film'/>
      <Button title='Rechercher' onPress={() => this._loadFilms()}/>


      <FlatList
       data={films}
       keyExtractor={(item) => item.id.toString()}
       renderItem={({item}) => <FilmItem film={item}/>}
     />
          </View>
        )
    }
}

const styles=StyleSheet.create({
  main_container:{marginTop:20,flex:1},
  textinput:{ marginLeft: 5, marginRight: 5, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5 },






})






export default Search;
