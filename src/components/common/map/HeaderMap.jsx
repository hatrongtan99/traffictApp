import {useContext, useEffect, useMemo, useState} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {default as FontAwesome5} from 'react-native-vector-icons/FontAwesome5';
import {location} from '../../../api/hmi.api';
import {MapContext} from '../../../context/MapProvider';

const HeaderMap = ({navigation}) => {
  const {marker} = useContext(MapContext);
  const [address, setAddress] = useState(null);
  useEffect(() => {
    if (marker) {
      location({
        location: `${marker?.HLat},${marker?.HLng}`,
        radius: 30,
        type: 'address',
        key: 'AIzaSyBvunGLR-eTGAFHH0xs4DIico8tseLos5M',
      })
        .then(data =>
          setAddress(
            data.data?.results[0]?.vicinity || data.data?.results[0]?.name,
          ),
        )
        .catch(err => console.log(err));
    }
  }, [marker]);

  const time = useMemo(() => {
    const currentDate = new Date();
    return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  }, [new Date()]);

  return (
    <View style={styles.container}>
      <View style={styles.spaceBetween}>
        <TouchableHighlight
          onPress={() => {
            if (navigation.canGoBack()) navigation.goBack();
          }}
          underlayColor="transparent">
          <FontAwesome5 name="arrow-left" size={28} color="#1aa23f" />
        </TouchableHighlight>
        <Text style={styles.titleTop}>{marker?.HName}</Text>
        <Text style={styles.hourTop}>{time}</Text>
      </View>

      <View style={styles.location}>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  titleTop: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
  },
  hourTop: {
    color: '#1aa23f',
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {},
  address: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default HeaderMap;
