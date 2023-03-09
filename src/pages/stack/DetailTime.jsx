import {useState, useEffect, createContext} from 'react';
import {StyleSheet, ScrollView, SafeAreaView, View, Alert} from 'react-native';
import {getInfoHmi, getTimeHmi} from '../../api/hmi.api';
import BodyTime from '../../components/common/detailTime/BodyTime';

import TableTime from '../../components/common/detailTime/TableTime';
import HeaderMap from '../../components/common/map/HeaderMap';
import Spiner from '../../components/custom/Spiner';

export const DetailTimeContext = createContext({});

const DetailTime = ({route, navigation}) => {
  const {idHmi} = route.params;
  const [infoHmi, setInfoHmi] = useState(null);
  const [timeHmi, setTimeHmi] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rushNum, setRushNum] = useState(1);
  const [mainRush, setMainRush] = useState(true);

  useEffect(() => {
    (async function () {
      const [infoHmi, timeHmi] = await Promise.allSettled([
        getInfoHmi(idHmi),
        getTimeHmi(idHmi),
      ]);
      if (infoHmi.status === 'rejected' || timeHmi.status === 'rejected') {
        Alert.alert('Gặp lỗi khi lấy dữ liệu Hmi');
      } else {
        setInfoHmi(infoHmi.value);
        setTimeHmi(timeHmi.value);
      }
      setIsLoading(false);
    })();
  }, [idHmi]);

  return (
    <DetailTimeContext.Provider
      value={{timeHmi, rushNum, setRushNum, setMainRush, mainRush}}>
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <Spiner />
        ) : (
          <ScrollView style={styles.ScrollView}>
            <HeaderMap navigation={navigation} />
            <BodyTime />
            <TableTime />
          </ScrollView>
        )}
      </SafeAreaView>
    </DetailTimeContext.Provider>
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

export default DetailTime;
