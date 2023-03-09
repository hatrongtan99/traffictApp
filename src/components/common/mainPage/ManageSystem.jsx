import {View, Text, StyleSheet} from 'react-native';
import {default as MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as AntDesign} from 'react-native-vector-icons/AntDesign';

const ManageSystem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quản lý hệ thống</Text>

        <Text style={styles.headerFilter}>Tất cả</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.boxItem}>
          <View style={styles.boxIcon}>
            <AntDesign name="calculator" size={40} color="#1a8dff" />
          </View>
          <View style={styles.text}>
            <Text style={styles.title}>Quản lý tủ</Text>

            <Text style={styles.textTotal}>Tổng số tủ: 128</Text>
          </View>
          <View style={[styles.ballColor, {backgroundColor: '#1aa23f'}]}></View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.boxIcon}>
            <MaterialCommunityIcons
              name="lightbulb-on-outline"
              size={40}
              color="#7ff3e1"
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.title}>Quản lý đèn</Text>

            <Text style={styles.textTotal}>Tổng số đèn: 12.250</Text>
          </View>
          <View style={[styles.ballColor, {backgroundColor: '#f33012'}]}></View>
        </View>

        <View style={styles.boxItem}>
          <View style={styles.boxIcon}>
            <MaterialCommunityIcons
              name="floor-lamp-dual-outline"
              size={40}
              color="#3d98e6"
            />
          </View>
          <View style={styles.text}>
            <Text style={styles.title}>Quản lý trụ</Text>

            <Text style={styles.textTotal}>Tổng số trụ: 1.500</Text>
          </View>
          <View style={[styles.ballColor, {backgroundColor: '#f33012'}]}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  headerTitle: {
    color: '#333',
    fontSize: 20,
    fontWeight: '500',
  },
  headerFilter: {
    color: '#1a8dff',
    fontSize: 20,
    fontWeight: '500',
  },

  box: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  boxItem: {
    height: 100,
    width: '32%',
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'relative',
    shadowColor: '#79bbfd',
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,

    elevation: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },

  boxIcon: {
    height: 45,
    width: 45,
    marginLeft: 10,
  },

  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    paddingBottom: 4,
  },

  textTotal: {
    fontSize: 10,
    color: '#999',
  },

  ballColor: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 999,
    backgroundColor: 'red',
    top: 14,
    right: 14,
  },
});
export default ManageSystem;
