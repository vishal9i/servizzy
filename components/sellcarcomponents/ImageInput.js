import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

// import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
  const [image, setImage] = useState();
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  console.log(image);
  return (
    <TouchableWithoutFeedback onPress={pickImage}>
      <View style={styles.container}>
        {!image ? (
          <MaterialCommunityIcons color={'black'} name="camera" size={40} />
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    borderRadius: 15,
    height: 60,
    overflow: 'hidden',
    width: 60,
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ImageInput;
