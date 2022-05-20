import React from 'react';
import {useEffect} from 'react';
import {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {FIRST_CARD, PETS, SECOND_CARD} from '../assets/data/pets';
import {AuthContext} from '../context/AuthContext';
import {CitesContext} from '../context/CitesContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  const {user} = useContext(AuthContext);
  const {loadCites} = useContext(CitesContext);

  useEffect(() => {
    setTimeout(async () => {
      await loadCites(user.dni);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <Text style={{...styles.titlePets, textAlign: 'right'}}>
            Time spend with dogs.
          </Text>
          <View
            style={{
              marginTop: 20,
              height: 190,
            }}>
            <FlatList
              data={PETS}
              renderItem={({item}) => <RenderItem item={item} />}
              keyExtractor={item => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text style={{...styles.titlePets, textAlign: 'left'}}>
            Popular pets
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            {FIRST_CARD.map(item => {
              return (
                <View
                  key={item.id}
                  style={{
                    ...styles.petCard,
                    backgroundColor: `${item.background}`,
                  }}>
                  <Text style={styles.nameCardPet}>{item.name}</Text>
                  <Text style={{paddingLeft: 8}}>
                    {' '}
                    <Icon name={'location'} size={15} color={'#5B5061'} /> Lima,
                    Perú
                  </Text>
                  <Image source={item.img} style={styles.imgCardPet} />
                  <View style={styles.arrowCardPet}>
                    <Icon
                      name={'chevron-forward'}
                      size={30}
                      color={'#FC822C'}
                      style={{padding: 15}}
                    />
                  </View>
                </View>
              );
            })}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            {SECOND_CARD.map(item => {
              return (
                <View
                  key={item.id}
                  style={{
                    ...styles.petCard,
                    backgroundColor: `${item.background}`,
                  }}>
                  <Text style={styles.nameCardPet}>{item.name}</Text>
                  <Text style={{paddingLeft: 8}}>
                    {' '}
                    <Icon name={'location'} size={15} color={'#5B5061'} /> Lima,
                    Perú
                  </Text>
                  <Image source={item.img} style={styles.imgCardPet} />
                  <View style={styles.arrowCardPet}>
                    <Icon
                      name={'chevron-forward'}
                      size={30}
                      color={'#FC822C'}
                      style={{padding: 15}}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export const RenderItem = ({item}) => {
  return (
    <View style={styles.viewPet}>
      <Image
        source={item.path}
        style={{
          width: 92,
          height: 107.5,
          zIndex: 10,
        }}
      />
      <Text style={styles.txtPet}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1DDBF',
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    textDecorationColor: '#000',
    textDecorationLine: 'underline',
    padding: 20,
    fontWeight: '700',
  },
  titlePets: {
    fontSize: 28,
    color: '#525E75',
    fontWeight: '800',
    paddingHorizontal: 10,
  },
  viewPet: {
    width: 120,
    height: 170,
    marginHorizontal: 2,
    padding: 7,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
  },
  txtPet: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '800',
  },
  petCard: {
    width: 165,
    backgroundColor: 'red',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
  },
  nameCardPet: {
    color: '#5B5061',
    fontWeight: '700',
    fontSize: 21,
    paddingTop: 20,
    paddingLeft: 28,
  },
  imgCardPet: {
    width: 190,
    height: 260,
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 20,
  },
  arrowCardPet: {
    width: 100,
    height: 100,
    borderRadius: 2000,
    backgroundColor: '#fff',
    position: 'absolute',
    right: -50,
    bottom: -40,
  },
});
