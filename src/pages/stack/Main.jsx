import {Text, View, StyleSheet} from 'react-native';
import ManageSystem from '../../components/common/mainPage/ManageSystem';
import SystemInfo from '../../components/common/mainPage/SystemInfo';
import ListMaintain from '../../components/common/mainPage/ListMaintain';

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.nameTp}>Bình Dương, T.Phố mới</Text>
          <Text style={styles.nameNv}>Nguyễn Văn A</Text>
        </View>
        <View>
          <Text style={styles.hour}>06:03</Text>
          <Text style={styles.hourSession}>AM</Text>
        </View>
        {/* info system */}
      </View>
      <View style={styles.itemContainer}>
        <SystemInfo />
      </View>

      <View style={styles.itemContainer}>
        <ManageSystem />
      </View>

      <View style={styles.itemContainer}>
        <ListMaintain />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 30,
  },
  header: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameTp: {
    color: '#333',
    fontSize: 26,
    fontWeight: '600',
  },
  nameNv: {
    color: '#666',
    paddingTop: 8,
    fontSize: 18,
    fontWeight: '500',
  },
  hour: {
    color: '#1a8dff',
    fontSize: 20,
    fontWeight: '500',
  },
  hourSession: {
    color: '#ccc',
  },
  itemContainer: {
    width: '100%',
    paddingTop: 10,
  },
});

export default Main;
