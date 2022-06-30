import React, {useContext, useState} from 'react';
import {BASE_URL} from '@env';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useForm} from '../hooks/useForm';
import {CitesContext} from '../context/CitesContext';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const NewCite = () => {
  const {createCite} = useContext(CitesContext);
  const [tempURI, setTempURI] = useState();
  const {username, puppyName, phone, dni, service, specifications, onChange} =
    useForm({
      username: '',
      puppyName: '',
      phone: '',
      dni: '',
      service: '',
      specifications: '',
    });
  const onSubmit = async img => {
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('puppyName', puppyName);
      formData.append('phone', phone);
      formData.append('dni', dni);
      formData.append('image', img);
      formData.append('status', 'Unattended');
      formData.append('service', service);
      formData.append('specifications', specifications);
      Keyboard.dismiss();
      await axios.post(`${BASE_URL}/cites/`, formData);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleUpload = async () => {
    const file = {
      uri: tempURI.uri,
      type: tempURI.type,
      name: tempURI.fileName,
    };
    console.log('file', file);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'petcenter');
    data.append('cloud_name', 'derfdcryk');
    const resp = await fetch(
      'https://api.cloudinary.com/v1_1/derfdcryk/image/upload',
      {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
          Content: 'multipart/form-data',
        },
      },
    );
    const img = await resp.json();
    await onSubmit(img.url);
  };

  const takePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      resp => {
        console.log(resp);
        if (resp.didCancel) {
          return;
        }
        if (!resp.assets?.[0].uri) {
          return;
        }
        setTempURI(resp.assets?.[0]);
      },
    );
  };
  const uploadFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      resp => {
        console.log(resp);
        if (resp.didCancel) {
          return;
        }
        if (!resp.assets?.[0].uri) {
          return;
        }
        setTempURI(resp.assets?.[0]);
      },
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F1DDBF'}}>
      <ScrollView>
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
              maxLength={9}
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
              onChangeText={value => onChange(value, 'service')}
              value={service}
              onSubmitEditing={onSubmit}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text style={styles.label}>Especificaciones:</Text>
            <TextInput
              placeholder="Especificaciones"
              style={styles.input}
              onChangeText={value => onChange(value, 'specifications')}
              value={specifications}
              onSubmitEditing={onSubmit}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text style={styles.label}>Foto de la mascota:</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: 10,
              }}>
              <TouchableOpacity onPress={takePhoto} style={styles.iconCite}>
                <Text>Cámara</Text>
                <Icon name={'camera'} size={30} color={'#92BA92'} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={uploadFromGallery}
                style={styles.iconCite}>
                <Text>Galería</Text>
                <Icon name={'images'} size={30} color={'#92BA92'} />
              </TouchableOpacity>
            </View>

            {tempURI && (
              <Image
                source={{uri: tempURI.uri}}
                style={{
                  marginTop: 10,
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            )}
            {/* <Text>{JSON.stringify(tempURI, null, 2)}</Text> */}

            {/* <TouchableOpacity onPress={onSubmit} style={styles.btnSendCite}>
              <Text style={styles.txtBtnCite}>Guardar Cita</Text>
            </TouchableOpacity> */}
            {tempURI && (
              <TouchableOpacity
                onPress={handleUpload}
                style={styles.btnSendCite}>
                <Text style={styles.txtBtnCite}>Send Photo</Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </ScrollView>
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
  iconCite: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column-reverse',
    marginRight: 40,
  },
  btnSendCite: {
    marginTop: 30,
    backgroundColor: '#000',
    borderRadius: 1000,
    // width: '60%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnCite: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    padding: 10,
  },
});
