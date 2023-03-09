import {useContext, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DetailTimeContext} from '../../../pages/stack/DetailTime';

const backgroundColor = ['#1aa23f', '#f8c418', '#6c5ce7', '#1a8dff'];
const TableTime = () => {
  const {timeHmi, rushNum, mainRush} = useContext(DetailTimeContext);

  const data = useMemo(() => {
    const list = Object.entries(timeHmi).slice(
      (mainRush ? 0 : rushNum) * 16 + 1,
      17 + 17 * (mainRush ? 0 : rushNum),
    );
    return [
      {label: 'Pha 1', data: list.slice(0, 4)},
      {label: 'Pha 2', data: list.slice(4, 8)},
      {label: 'Pha 3', data: list.slice(8, 12)},
      {label: 'Pha 4', data: list.slice(12, 16)},
    ];
  }, [rushNum, mainRush]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        BẢNG THỜI LƯỢNG {mainRush ? 'MAIN' : 'RUSH'}
      </Text>
      {data.map((item, index) => {
        return (
          <View style={styles.itemContainer} key={index}>
            <Text style={styles.label}>{item.label}:</Text>

            <View style={styles.boxWrap}>
              {item.data.map((value, i) => {
                return (
                  <View
                    style={[
                      styles.boxColor,
                      {backgroundColor: backgroundColor[i]},
                    ]}
                    key={i}>
                    <Text style={styles.textBox} aria-label={value[0]}>
                      {value[0]}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: '#333',
    fontWeight: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 8,
  },
  itemContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    marginRight: 10,
  },
  boxWrap: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxColor: {
    width: 60,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default TableTime;
