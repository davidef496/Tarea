import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  StyleSheet,
  Button,
  CameraRoll,
  Image,
  Dimensions,
  ScrollView,
  RefreshControl
} from 'react-native'
import {Card, FormInput, FormLabel} from "react-native-elements";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Camara app',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    }

    getPhotos = () => {
      CameraRoll.getPhotos({
       first: 20,
       assetType: 'Photos',
     })
     .then(r => {
       this.setState({ photos: r.edges });
     })
     .catch((err) => {
        //Error Loading Images
     });
   };
    render() {
 return (
   <View>
     <Button title="Cargar imagen" onPress={this.getPhotos} />
     <ScrollView>
       {this.state.photos.map((p, i) => {
       return (
         <Image
           key={i}
           style={{
             width: 300,
             height: 100,
           }}
           source={{ uri: p.node.image.uri }}
         />
       );
     })}
     </ScrollView>
   </View>
 );
}}
