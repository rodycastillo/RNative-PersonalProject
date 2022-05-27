import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import {useForm} from '../hooks/useForm';

const NewCite = () => {
  const {
    username,
    puppyName,
    puppyPhoto,
    phone,
    status,
    characters,
    dni,
    onChange,
  } = useForm({
    username: 'Ximena',
    puppyName: 'Casper',
    puppyPhoto: '',
    phone: '973123123',
    status: 'Unattended',
    characters: {
      service: 'corte y baño',
      specifications: 'corte schnauzer',
    },
    dni: '76035765',
  });

  const onSubmit = () => {
    console.log(dni);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F1DDBF'}}>
      <SafeAreaView>
        <Text style={styles.title}>Agregar Nueva Cita</Text>
        <View style={styles.container}>
          <Text style={styles.label}>Puppy name:</Text>
          <TextInput
            placeholder="Nombre de la mascota"
            // keyboardType="numeric"
            underlineColorAndroid="white"
            style={styles.input}
            onChangeText={value => onChange(value, 'puppyName')}
            value={puppyName}
            maxLength={8}
            onSubmitEditing={onSubmit}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NewCite;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#000',
    fontWeight: '700',
  },
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
  },
});
