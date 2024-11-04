import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
const Forgetpassword = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const handleSubmit = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!email.includes('@') || !email.includes('.com')) {
      setError('Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match!');
    } else {
      setAlertMessage('Your password has been reset!');
    }

    setShowAlert(true);
    setError('');

    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <TouchableOpacity>
        <AntDesignIcon
          name="arrowleft"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Text style={styles.title}>Forget Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 20,
    color: 'black',
    fontFamily: 'monospace',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Forgetpassword;
