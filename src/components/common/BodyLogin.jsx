import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {default as MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as FontAwesome5} from 'react-native-vector-icons/FontAwesome5';

import InputTextAuth from '../custom/InputTextAuth';
import ButtonAuth from '../custom/ButtonAuth';

const BodyLogin = ({userInfo, setUserInfo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Sign In</Text>
        <FontAwesome5 name="user-circle" size={70} color="#666" />
      </View>
      <View style={styles.inputGroup}>
        <View style={styles.inputItem}>
          <InputTextAuth
            icon={
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="#666"
              />
            }
            placeholder="Email"
            handleOnchage={text => setUserInfo({...userInfo, UserName: text})}
          />
        </View>
        <View style={styles.inputItem}>
          <InputTextAuth
            icon={
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color="#666"
              />
            }
            placeholder="Password"
            handleOnchage={text => setUserInfo({...userInfo, Password: text})}
            password={true}
          />
        </View>

        <View style={styles.forgotButton}>
          <ButtonAuth
            title="Forgot password?"
            styleText={{fontSize: 14, fontWeight: '400'}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
  },
  titleText: {
    color: '#1aa23f',
    fontWeight: '400',
    fontSize: Dimensions.get('screen') <= 280 ? 32 : 40,
    marginBottom: 30,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputItem: {
    marginBottom: 20,
  },
  forgotButton: {
    marginTop: 10,
  },
});

export default BodyLogin;
