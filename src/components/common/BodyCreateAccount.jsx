import {StyleSheet, Text, View} from 'react-native';
import {default as MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as SimpleLineIcons} from 'react-native-vector-icons/SimpleLineIcons';

import InputTextAuth from '../custom/InputTextAuth';

const BodyCreateAccount = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Create Account</Text>
      </View>
      <View style={styles.inputGroup}>
        <View style={styles.inputItem}>
          <InputTextAuth
            icon={<SimpleLineIcons name="user" size={24} color="#666" />}
            placeholder="Full Name"
          />
        </View>
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
            password={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    flexDirection: 'column',
  },
  titleText: {
    color: '#1aa23f',
    fontWeight: '400',
    fontSize: 40,
  },
  header: {height: 100, justifyContent: 'center', alignItems: 'center'},
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

export default BodyCreateAccount;
