import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import {useState, useContext} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import {AuthContext} from '../../context/AuthProvider';
import BodyLogin from '../../components/common/BodyLogin';
import ButtonAuth from '../../components/custom/ButtonAuth';
import {login} from '../../api/auth.api';

const Login = ({navigation}) => {
  const {setAuth} = useContext(AuthContext);

  const pressNavigateCreateAccount = () => {
    navigation.navigate('Create-account');
  };

  const [userInfo, setUserInfo] = useState({UserName: '', Password: ''});

  const loginSubmit = async () => {
    try {
      const res = await login(userInfo);
      if (res) {
        setAuth(res.data);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('', error?.response?.data);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <BodyLogin userInfo={userInfo} setUserInfo={setUserInfo} />
      </View>

      <View style={styles.button}>
        <ButtonAuth
          title="SIGN IN"
          icon={
            <AntDesign
              name="arrowright"
              size={24}
              color="white"
              style={{marginRight: 5}}
            />
          }
          fill={true}
          handlePress={loginSubmit}
        />
        <View style={{paddingTop: 20}}>
          <ButtonAuth
            title="CREATE ACCOUNT"
            styleText={{fontSize: 20}}
            handlePress={pressNavigateCreateAccount}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: 400,
  },
  button: {
    height: 200,
  },
});

export default Login;
