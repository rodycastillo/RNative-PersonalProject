import axios from 'axios';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardReport} from '../components/CardReport';
import {AuthContext} from '../context/AuthContext';
import {getOnePuppyByDni} from '../services/cite';

export const HomeScreen = () => {
  const {user} = useContext(AuthContext);
  const [puppy, setPuppy] = useState([]);

  const getPuppy = async () => {
    try {
      const {data} = await getOnePuppyByDni(user.dni);
      console.log(data.puppy, 'Succ 18');
      setPuppy(data.puppy);
    } catch (error) {
      console.log(error, 'Error 21');
    }

    // await axios
    //   .get(`http://localhost:9000/api/v1.0/cites/puppy/${user.dni}`)
    //   .then(({data}) => {
    //     console.log(data.puppy, 'Resp');
    //     setPuppy(data.puppy);
    //   })
    //   .catch(error => {
    //
    //   });
  };
  useEffect(() => {
    setTimeout(async () => {
      await getPuppy();
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Puppy</Text>
      {/* <CardReport name={puppy.puppyName} img={puppy.puppyPhoto}/> */}
      <CardReport name={puppy.puppyName} />
      <Text>{JSON.stringify(puppy, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
});
