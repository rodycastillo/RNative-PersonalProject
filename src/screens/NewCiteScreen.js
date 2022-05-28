import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import {useForm} from '../hooks/useForm';

const NewCite = () => {
  const [charactrs, setCharactrs] = useState({
    service: 'corte y baño',
    specifications: 'corte schnauzer',
  });
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
    charactrs,
    dni: '76035765',
  });
  console.log(charactrs);
  console.log(characters);
  const onSubmit = () => {
    console.log(dni);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F1DDBF'}}>
      <SafeAreaView>
        <Text style={styles.title}>Agregar Nueva Cita</Text>
        <View style={styles.container}>
          <Text style={styles.label}>Nombre de la mascota:</Text>
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
          <Text style={styles.label}>Nombre del Usuario:</Text>
          <TextInput
            placeholder="Nombre del usuario"
            style={styles.input}
            onChangeText={value => onChange(value, 'username')}
            value={username}
            onSubmitEditing={onSubmit}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.label}>Telefono:</Text>
          <TextInput
            placeholder="Telefono"
            style={styles.input}
            onChangeText={value => onChange(value, 'phone')}
            value={phone}
            onSubmitEditing={onSubmit}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.label}>DNI:</Text>
          <TextInput
            placeholder="DNI"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={value => onChange(value, 'dni')}
            value={dni}
            onSubmitEditing={onSubmit}
            maxLength={8}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.label}>Servicio:</Text>
          <TextInput
            placeholder="Servicio"
            style={styles.input}
            onChangeText={text => setCharactrs({...charactrs, service: text})}
            value={charactrs.service}
            onSubmitEditing={onSubmit}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={styles.label}>Especificaciones:</Text>
          <TextInput
            placeholder="Especificaciones"
            style={styles.input}
            onChangeText={text =>
              setCharactrs({...charactrs, specifications: text})
            }
            value={charactrs.specifications}
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
    marginVertical: 10,
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
