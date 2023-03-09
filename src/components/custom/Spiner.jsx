import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const Spiner = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Spiner;
