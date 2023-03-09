import {default as AntDesign} from 'react-native-vector-icons/AntDesign';
import {StyleSheet, View} from 'react-native';
import BodyCreateAccount from '../../components/common/BodyCreateAccount';
import ButtonAuth from '../../components/custom/ButtonAuth';

const CreateAccount = ({navigation}) => {
  const pressNavigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <BodyCreateAccount />
      </View>

      <View style={styles.button}>
        <ButtonAuth
          title="CREATE ACCOUNT"
          icon={
            <AntDesign
              name="arrowright"
              size={24}
              color="white"
              style={{marginRight: 5}}
            />
          }
          fill={true}
        />
        <View style={{paddingTop: 20}}>
          <ButtonAuth
            title="SIGN IN"
            styleText={{fontSize: 20}}
            handlePress={pressNavigateLogin}
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
    marginTop: 20,
    height: 200,
  },
});

export default CreateAccount;
