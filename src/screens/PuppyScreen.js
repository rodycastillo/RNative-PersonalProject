import React, {useContext} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CardReport} from '../components/CardReport';
import {CitesContext} from '../context/CitesContext';

export const PuppyScreen = () => {
  const {cites} = useContext(CitesContext);

  const statusServicePet = status => {
    switch (status) {
      case 'Unattended':
        return 'No Atendido';
      case 'In process':
        return 'En Proceso...';
      case 'Attended':
        return 'Atendido!!';
      default:
        return status;
    }
  };

  const formatDate = date => {
    let newDate;
    newDate = date.split(' ');
    return `${newDate[0]}, ${newDate[2]} ${newDate[1]} ${newDate[3]} || ${newDate[4]}`;
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F1DDBF'}}>
      {cites.cite ? (
        <>
          <CardReport name={cites.cite.puppyName} />
          <SafeAreaView style={{flex: 1, marginTop: 80}}>
            <ScrollView style={{flex: 1}}>
              <View style={styles.container}>
                <View style={styles.boxData}>
                  <Icon
                    name={'calendar-outline'}
                    size={40}
                    color={'#525E75'}
                    style={styles.iconUser}
                  />
                  <Text style={styles.ownerText}>
                    {formatDate(cites.cite.date)}
                  </Text>
                </View>
                <View style={styles.ownerBox}>
                  <Icon
                    name={'person-circle'}
                    size={55}
                    color={'#525E75'}
                    style={{...styles.iconUser, left: -5}}
                  />
                  <View style={styles.ownerBoxName}>
                    <Text style={styles.ownerName}>{cites.cite.username}</Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '900',
                        fontSize: 16,
                        paddingLeft: 10,
                      }}>
                      Dueño
                    </Text>
                  </View>
                </View>
                <View style={styles.boxData}>
                  <Icon
                    name={'pricetag-outline'}
                    size={40}
                    color={'#525E75'}
                    style={styles.iconUser}
                  />
                  <Text style={styles.ownerText}>
                    {statusServicePet(cites.cite.status)}
                  </Text>
                </View>
                <View style={styles.ownerBox}>
                  <Icon
                    name={'receipt-outline'}
                    size={50}
                    color={'#525E75'}
                    style={{...styles.iconUser, left: -5}}
                  />
                  <View style={styles.ownerBoxName}>
                    <Text style={styles.ownerName}>
                      {cites.cite &&
                        (cites.cite.characters.service
                          ? cites.cite.characters.service
                          : 'No especifico')}
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '900',
                        fontSize: 16,
                        paddingLeft: 10,
                      }}>
                      Servicio
                    </Text>
                    <Text style={styles.ownerName}>
                      {cites.cite &&
                        (cites.cite.characters.specifications
                          ? cites.cite.characters.specifications
                          : 'No especifico')}
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '900',
                        fontSize: 16,
                        paddingLeft: 10,
                      }}>
                      Especificaciones
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      ) : (
        <ActivityIndicator size="large" color="#000" style={{flex: 1}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  ownerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  iconUser: {
    zIndex: 10,
  },
  boxData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ownerBoxName: {
    backgroundColor: '#92BA92',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '90%',
    zIndex: 9,
    left: -24,
  },
  ownerName: {
    color: '#525E75',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
    textTransform: 'capitalize',
  },
  ownerText: {
    color: '#525E75',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 15,
  },
});
