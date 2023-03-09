import {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import {Menu} from 'react-native-paper';
import {DetailTimeContext} from '../../../pages/stack/DetailTime';

const BodyTime = () => {
  const {timeHmi, rushNum, setRushNum, setMainRush} =
    useContext(DetailTimeContext);
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const format = time => {
    if (time.toString().length == 1) {
      return '0' + time;
    }
    return time;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KHUNG THỜI GIAN</Text>
      <View style={styles.body}>
        <View>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => setMainRush(true)}>
            <View style={styles.button}>
              <Text style={{fontWeight: '700', color: '#333', fontSize: 20}}>
                Main
              </Text>
            </View>
          </TouchableHighlight>
          <View style={styles.timeWrrap}>
            <Text style={styles.timeText}>
              Start Time: {format(timeHmi.Start_Time_H)}:
              {format(timeHmi.Start_Time_M)}:{format(timeHmi.Start_Time_S)}
            </Text>
            <Text style={styles.timeText}>
              Stop Time: {format(timeHmi.Stop_Time_H)}:
              {format(timeHmi.Stop_Time_M)}:{format(timeHmi.Stop_Time_S)}
            </Text>
          </View>
        </View>

        <View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableHighlight
                onPress={() => setMainRush(false)}
                underlayColor="transparent">
                <View style={styles.button}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: '#333',
                      fontSize: 20,
                    }}>
                    Rush
                  </Text>
                </View>
              </TouchableHighlight>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                  <TouchableHighlight
                    onPress={openMenu}
                    underlayColor="transparent">
                    <View
                      style={[
                        styles.button,
                        {backgroundColor: '#f8c418', marginLeft: 10},
                      ]}>
                      <Text
                        style={{
                          fontWeight: '700',
                          color: '#333',
                          fontSize: 20,
                        }}>
                        {rushNum}
                      </Text>
                    </View>
                  </TouchableHighlight>
                }>
                {new Array(8).fill(null).map((_, index) => (
                  <Menu.Item
                    onPress={() => {
                      setRushNum(index + 1);
                      setMainRush(false);
                      closeMenu();
                    }}
                    title={`Rush ${index + 1}`}
                    key={index}
                  />
                ))}
              </Menu>
            </View>
          </View>

          <View style={styles.timeWrrap}>
            <Text style={styles.timeText}>
              Start Time: {format(timeHmi['Start_Rush_H_' + rushNum])}:
              {format(timeHmi['Start_Rush_M_' + rushNum])}
            </Text>
            <Text style={styles.timeText}>
              Stop Time: {format(timeHmi['Stop_Rush_H_' + rushNum])}:
              {format(timeHmi['Stop_Rush_M_' + rushNum])}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingTop: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  body: {
    width: 'auto',
    height: 'auto',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1aa23f',
    padding: 10,
    borderRadius: 5,
    width: 70,
  },
  stt: {
    alignItems: 'center',
    padding: 10,
    width: 50,
    marginLeft: 10,
    backgroundColor: '#f8c418',
    borderRadius: 3,
  },
  timeWrrap: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 60,
    marginTop: 5,
    marginBottom: 5,
  },
  timeText: {
    fontSize: 24,
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 5,
    color: '#333',
  },
});

export default BodyTime;
