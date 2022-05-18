import React from 'react';
import {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

const ProfileScreen = () => {
  const {user, dispatch} = useContext(AuthContext);
  const LogOut = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name={'ios-person-circle-outline'}
          size={120}
          color={'#92BA92'}
          style={styles.iconUser}
        />
        <Text style={styles.userName}>{user && user.name}</Text>
        <Text style={styles.location}>Lima, Perú</Text>
      </View>
      <SafeAreaView style={styles.areaView}>
        <View style={styles.containerData}>
          <View style={styles.field}>
            <Icon name={'ios-at-circle-outline'} size={30} color={'#fff'} />
            <Text style={styles.fieldName}>{user && user.email}</Text>
          </View>
          <View style={styles.field}>
            <Icon name={'ios-barcode'} size={30} color={'#fff'} />
            <Text style={styles.fieldName}>{user && user._id}</Text>
          </View>
          <View style={styles.field}>
            <Icon name={'ios-card'} size={30} color={'#fff'} />
            <Text style={styles.fieldName}>{user && user.dni}</Text>
          </View>
          <View style={styles.field}>
            <Icon name={'ios-body'} size={30} color={'#fff'} />
            <Text style={styles.fieldName}>{user && user.rol}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnLogOut} onPress={LogOut}>
          <Text style={styles.btnLogOutTxt}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F1DDBF',
  },
  header: {
    backgroundColor: '#525E75',
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    textTransform: 'capitalize',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  location: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconUser: {
    borderRadius: 1000,
  },
  field: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  fieldName: {
    color: '#525E75',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  containerData: {
    paddingHorizontal: 40,
    paddingVertical: 70,
  },
  btnLogOut: {
    backgroundColor: '#BB6464',
    width: 200,
    borderRadius: 1000,
    alignSelf: 'center',
  },
  btnLogOutTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 18,
  },
});

export default ProfileScreen;
