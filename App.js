import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViewer from "./Components/ImageViewer";
import Button from "./Components/Buttons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import IconsButtons from "./Components/IconButtons";
import Circlebuttons from "./Components/CircleBuuttons";
import 
export default function App() {
  const PlaceHolderImage = require("./assets/images/background-image.png");

  //gestion d'etat pour stocker l'url de l'image selectionner
  const [selectedImage, setSelectedImage] = useState(null);

  //etat pour gerer l'options d'affichages du boutons 
  const [showAppOptions, setshowAppOptions] = useState(false);

  //Fonction pour l'image picker(pour selectionner l'image de l'appareil)
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, //l'utilisateur peut recadrer l'image au tout long du processus
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setshowAppOptions(true);
    } else {
      alert("you did not selected any image.");
    }
  };


  //fonction pour le boutons reset
  const onReset = ()=>{
    setshowAppOptions(false)
  }

  //fonction pour le boutons addSticker
  const onAddSticker = ()=>{
    //en attente
  }

  const onSaveImageAsync = ()=>{
    //en attente
  }
  return (
    <View style={styles.container}>
      {/* vue pour l'images */}
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceHolderImage}
          selectedImage={selectedImage}
        />
      </View>

      {/**vue pour les deux boutons */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}> 
          <View style={styles.optionsRow}> 
            <IconsButtons icon="refresh" label="Reset" onPress={onReset} /> 
            <Circlebuttons onPress={onAddSticker} /> 
            <IconsButtons icon="save-alt" label="save" onPress={onSaveImageAsync} /> 
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choisir de  photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Utilise cette photo"
            onPress={() => setshowAppOptions(true)}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer :{
    position :'flex',
    bottom : 80,
  },
  optionsRow :{
    alignItems : "center",
    flexDirection: "row",
  }
});
