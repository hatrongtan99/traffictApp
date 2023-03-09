import {useContext} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {MapContext} from '../../../context/MapProvider';

const MapBody = ({navigation}) => {
  const {listHmi, setMarker} = useContext(MapContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bản đồ</Text>
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: 10.7283328653373,
            longitude: 106.678876876831,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}>
          {listHmi.map((hmi, index) => (
            <Marker
              key={hmi.Id}
              coordinate={{latitude: hmi.HLat, longitude: hmi.HLng}}
              title={hmi.HName}
              onPress={e => setMarker(hmi)}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  mapContainer: {
    width: '100%',
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapBody;
