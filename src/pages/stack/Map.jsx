import {useContext} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import HeaderMap from '../../components/common/map/HeaderMap';
import MapBody from '../../components/common/map/MapBody';
import InfoIntersection, {
  BtnGroup,
} from '../../components/common/map/InfoIntersection';
import Spiner from '../../components/custom/Spiner';
import {MapContext} from '../../context/MapProvider';

const Map = ({navigation}) => {
  const {isLoading} = useContext(MapContext);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <ScrollView style={styles.ScrollView}>
            <HeaderMap navigation={navigation} />

            <MapBody navigation={navigation} />

            <InfoIntersection navigation={navigation} />
          </ScrollView>
          <BtnGroup navigation={navigation} />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ScrollView: {
    marginHorizontal: 10,
  },
});

export default Map;
