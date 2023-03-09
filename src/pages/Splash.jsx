import {StyleSheet, Text, View, Dimensions} from 'react-native';

import ButtonAuth from '../components/custom/ButtonAuth';

const Splash = ({navigation}) => {
  const handleNavigate = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>TFLSuv</Text>
      </View>
      <View style={styles.button}>
        <ButtonAuth
          title="www.amt.com.vn"
          handlePress={handleNavigate}
          fill={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12d382',
  },
  body: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Dimensions.get('screen') <= 280 ? 70 : 90,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: {width: -2, height: -4},
    textShadowRadius: 10,
  },
  button: {
    height: '30%',
  },
});

export default Splash;
