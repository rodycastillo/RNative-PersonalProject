import React, {useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Alert,
} from 'react-native';
import {Background} from '../components/Background';
import {AuthContext} from '../context/AuthContext';
import {useForm} from '../hooks/useForm';

export const LoginScreen = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  const {dni, password, onChange} = useForm({
    dni: '',
    password: '',
  });

  const onLogin = async () => {
    if (dni.length === 0 || password.length === 0) {
      Alert.alert('Complete los campos');
      return;
    }
    try {
      await signIn({dni, password});
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert('Login Incorrecto');
      console.log(error, 'Login Error');
    }
  };
  return (
    <>
      <Background />

      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Text style={styles.title}>User Login</Text>

          <Text style={styles.label}>DNI:</Text>
          <TextInput
            placeholder="Ingrese su DNI"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="numeric"
            underlineColorAndroid="white"
            style={[
              styles.inputField,
              Platform.OS === 'ios' && styles.inputFieldIOS,
            ]}
            selectionColor="white"
            onChangeText={value => onChange(value, 'dni')}
            value={dni}
            maxLength={8}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            placeholder="Ingrese su contraseña"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            secureTextEntry={true}
            style={[
              styles.inputField,
              Platform.OS === 'ios' && styles.inputFieldIOS,
            ]}
            selectionColor="white"
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onLogin}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={onLogin}>
              <Text style={styles.buttonTxt}> Login </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnToRegister}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnReg}
              onPress={() => navigation.replace('RegisterScreen')}>
              <Text style={styles.btnTxtReg}>
                {' '}
                Register <View style={styles.arrow}></View>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputField: {
    color: 'white',
    fontSize: 20,
  },
  inputFieldIOS: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  buttonTxt: {
    fontSize: 18,
    color: 'white',
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 50,
  },
  btnToRegister: {
    position: 'absolute',
    right: 30,
    bottom: '20%',
  },
  btnTxtReg: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 16,
  },
  arrow: {
    borderBottomColor: '#fff',
    borderBottomWidth: 3,
    borderRightColor: '#fff',
    borderRightWidth: 3,
    width: 10,
    height: 10,
    transform: [{rotate: '-45deg'}],
  },
  buttonReturn: {
    position: 'absolute',
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
});
