import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AwesomeAlert from 'react-native-awesome-alerts';
const Home = ({navigation}: any) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  interface ImageData {
    image: any;
    name: string;
  }
  const imagedata: ImageData[] = [
    {image: require('../Image/photo1.jpeg'), name: 'CAR1'},
    {image: require('../Image/photo2.jpg'), name: 'CAR2'},
    {image: require('../Image/photo3.jpg'), name: 'CAR3'},
    {image: require('../Image/photo4.jpg'), name: 'CAR4'},
    {image: require('../Image/photo5.jpg'), name: 'CAR5'},
    {image: require('../Image/photo6.jpg'), name: 'CAR6'},
    {image: require('../Image/photo7.jpg'), name: 'CAR7'},
    {image: require('../Image/photo8.jpg'), name: 'CAR8'},
    {image: require('../Image/photo9.jpg'), name: 'CAR9'},
    {image: require('../Image/photo10.jpg'), name: 'CAR10'},
  ];

  const handleSubmit = () => {
    setShowAlert(true);
    setAlertMessage('You have successfully added the car');
  };
  const handlemessage = () => {
    navigation.navigate('Commentdetail');
  };
  const handlemessage1 = () => {
    setShowAlert(true);
    setAlertMessage('You have successfully sent the message');
  };
  const handlereact = () => {
    setShowAlert(true);
    setAlertMessage('reactions have been successfully lovely');
  };
  const handlerepeat = () => {
    setShowAlert(true);
    setAlertMessage('You have successfully repost the car');
  };
  const handlesend = () => {
    setShowAlert(true);
    setAlertMessage('your message has been forwarded successfully');
  };
  return (
    <>
      <View
        style={{
          height: 50,
          width: 405,
          borderColor: 'gray',
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../Image/Image2.jpg')}
            style={{height: 40, width: 40, borderRadius: 55, marginLeft: 10}}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="search"
          style={{
            height: 40,
            width: 210,
            borderColor: 'gray',
            borderWidth: 1,
            color: 'gray',
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row', gap: 10}}
          onPress={handleSubmit}>
          <AntDesignIcon name="pluscircleo" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{display: 'flex', flexDirection: 'row', gap: 10}}
          onPress={handlemessage1}>
          <AntDesignIcon name="message1" size={30} color="black" />
        </TouchableOpacity>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Alert"
          message={alertMessage}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            setShowAlert(false);
          }}
        />
      </View>
      <View>
        <FlatList
          data={imagedata}
          horizontal={true}
          renderItem={({item}) => (
            <View>
              <Image
                source={item.image}
                style={{height: 70, width: 70, borderRadius: 55, margin: 10}}
              />
              <Text style={{textAlign: 'center', fontWeight: '900'}}>
                {item.name}
              </Text>
            </View>
          )}
          keyExtractor={item => item.image}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <FlatList
          data={imagedata}
          horizontal={false}
          renderItem={({item}) => (
            <View>
              <Image
                source={item.image}
                style={{height: 250, width: 338, margin: 10}}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity onPress={handlereact}>
                  <AntDesignIcon name="heart" size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlemessage}>
                  <EvilIcons name="comment" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlerepeat}>
                  <FeatherIcon name="repeat" size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlesend}>
                  <FeatherIcon name="send" size={25} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.image}
        />
      </View>
    </>
  );
};

export default Home;
