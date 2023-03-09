import {useContext} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';

import {MapContext} from '../../../context/MapProvider';
const InfoIntersection = ({navigation}) => {
  const {marker} = useContext(MapContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin </Text>
      <View style={styles.box}>
        <Text>{JSON.stringify(marker)}</Text>
      </View>
    </View>
  );
};

export const BtnGroup = ({navigation}) => {
  const {marker} = useContext(MapContext);
  return (
    <View style={styles.btnGroup}>
      <TouchableHighlight
        onPress={() =>
          Alert.alert('', 'Xem chi tiết', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () =>
                navigation.push('Detail-time', {idHmi: marker.Hid}),
            },
          ])
        }
        underlayColor="transparent"
        disabled={!!!marker}>
        <View
          style={[
            styles.button,
            {backgroundColor: !!!marker ? '#ddd' : '#1aa23f'},
          ]}>
          <Text style={{fontWeight: '500', color: '#333', fontSize: 16}}>
            OK
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() =>
          Alert.alert('', 'Bảo Trì', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
        }
        underlayColor="transparent"
        disabled={!!!marker}>
        <View
          style={[
            styles.button,
            {backgroundColor: !!!marker ? '#ddd' : 'yellow'},
          ]}>
          <Text style={{fontWeight: '500', color: '#333', fontSize: 16}}>
            Bảo Trì
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() =>
          Alert.alert('', 'Sự Cố', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
        }
        underlayColor="transparent"
        disabled={!!!marker}>
        <View
          style={[
            styles.button,
            {backgroundColor: !!!marker ? '#ddd' : 'red'},
          ]}>
          <Text style={{fontWeight: '500', color: '#333', fontSize: 16}}>
            Sự Cố
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  title: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    color: '#333',
  },
  box: {
    flex: 1,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    marginBottom: 8,
    marginTop: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1aa23f',
    padding: 8,
    borderRadius: 5,
    minWidth: 70,
  },
});

export default InfoIntersection;
