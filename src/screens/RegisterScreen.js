import React, {useContext} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import {Background} from '../components/Background';
import {AuthContext} from '../context/AuthContext';
import {useForm} from '../hooks/useForm';

export const RegisterScreen = ({navigation}) => {
  const {signUp} = useContext(AuthContext);
  const {name, email, password, dni, onChange} = useForm({
    name: '',
    email: '',
    password: '',
    dni: '',
  });
  const onRegister = async () => {
    if (
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      dni.length === 0
    ) {
      Alert.alert('Completa los campos');
      return;
    }
    try {
      await signUp({name, email, password, dni});
      Keyboard.dismiss();
      navigation.replace('LoginScreen');
    } catch (error) {
      Alert.alert('Registro Incorrecto');
      console.log(error, 'Register Error');
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
        <View style={style.container}>
          <Text style={style.title}>Register Native</Text>
          <Text style={style.label}>Nombres: </Text>
          <TextInput
            placeholder="Ingrese su nombre"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            // keyboardType="name"
            underlineColorAndroid="#fff"
            style={[
              style.inputField,
              Platform.OS === 'ios' && style.inputFieldIOS,
            ]}
            onChangeText={value => onChange(value, 'name')}
            value={name}
            onSubmitEditing={onRegister}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={style.label}>Dni: </Text>
          <TextInput
            placeholder="Ingrese su dni"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            keyboardType="numeric"
            underlineColorAndroid="#fff"
            style={[
              style.inputField,
              Platform.OS === 'ios' && style.inputFieldIOS,
            ]}
            onChangeText={value => onChange(value, 'dni')}
            value={dni}
            maxLength={8}
            onSubmitEditing={onRegister}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={style.label}>Email: </Text>
          <TextInput
            placeholder="Ingrese su email"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            keyboardType="email-address"
            underlineColorAndroid="#fff"
            style={[
              style.inputField,
              Platform.OS === 'ios' && style.inputFieldIOS,
            ]}
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onRegister}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={style.label}>Password: </Text>
          <TextInput
            placeholder="Ingrese su contraseña"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            secureTextEntry={true}
            underlineColorAndroid="#fff"
            style={[
              style.inputField,
              Platform.OS === 'ios' && style.inputFieldIOS,
            ]}
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onRegister}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={style.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={style.button}
              onPress={onRegister}>
              <Text style={style.buttonTxt}> Register </Text>
            </TouchableOpacity>
          </View>
          <View style={style.btnToRegister}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={style.btnReg}
              onPress={() => navigation.replace('LoginScreen')}>
              <Text style={style.btnTxtReg}>
                {' '}
                Login <View style={style.arrow}></View>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
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
});
