import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
const Commentdetail = ({navigation}: {navigation: any}) => {
  const [comment, setcomment] = useState('');

  function post(comment: string): void {
    console.log(`Comment posted: ${comment}`);
  }

  return (
    <View >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <AntDesignIcon name="arrowleft" size={35} color="black" />
      </TouchableOpacity>

      <TextInput
        placeholder="text comment"
        value={comment}
        onChangeText={setcomment}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          padding: 10,
          marginTop: 20,
          height: 80,
          textAlignVertical: 'top',
        }}
        multiline
      />
      <TouchableOpacity
        onPress={() => {
          Alert.alert(`Comment posted: ${comment}`);
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            backgroundColor: 'blue',
            height: 30,
            width: 70,
            textAlign: 'center',
            marginTop: 10,
            borderRadius: 10,
          }}>
          Post
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Commentdetail;
