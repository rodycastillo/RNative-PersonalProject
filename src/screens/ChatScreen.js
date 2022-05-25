import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const ChatScreen = () => {
  const [msg, setMsg] = useState('');
  const {user} = useContext(AuthContext);
  console.log(user.rol);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#525E75'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>
            {' '}
            <Icon
              name={'radio-button-on-sharp'}
              size={20}
              color={'#31A24C'}
            />{' '}
            ADMIN
          </Text>
          <Text style={{paddingLeft: 25}}>active</Text>
        </View>
        <View style={styles.chatContainer}>
          <View style={styles.chatLeft}>
            <Text style={styles.textMsg}> Hola</Text>
          </View>
          <View style={styles.chatRight}>
            <Text style={styles.textMsg}> Busco a mi perrito</Text>
          </View>
        </View>
        <View>
          <TextInput value={msg} style={styles.input} onChangeText={setMsg} />
          <TouchableOpacity onPress={() => console.log(msg)}>
            <Icon
              name={'send'}
              size={20}
              color={'#14A7F9'}
              style={styles.btnSend}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1DDBF',
    flex: 1,
  },
  header: {
    backgroundColor: '#525E75',
    width: '100%',
    height: 50,
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  headerTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    width: '100%',
  },
  chatLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#4f04ff21',
    borderRadius: 10,
  },
  chatRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#9900ff20',
    borderRadius: 10,
  },
  textMsg: {
    padding: 13,
    fontWeight: '400',
    fontSize: 16,
    color: '#000',
  },
  input: {
    height: 40,
    width: '96%',
    margin: '2%',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  btnSend: {
    position: 'absolute',
    bottom: 18,
    right: 15,
  },
});
