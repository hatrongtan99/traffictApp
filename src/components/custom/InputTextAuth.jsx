import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';

const InputTextAuth = ({
  icon,
  placeholder = '',
  handleOnchage,
  label,
  password,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.icon}>{icon ? icon : null}</View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={handleOnchage}
        underlineColorAndroid="transparent"
        secureTextEntry={password}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: Dimensions.get('screen') <= 280 ? 40 : 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  icon: {
    paddingRight: 6,
    paddingLeft: 6,
  },
  label: {
    color: '#666',
  },
  textInput: {
    paddingLeft: 6,
    flex: 1,
    height: '100%',
    marginLeft: 6,
    color: '#333',
    fontSize: 18,
  },
});

export default InputTextAuth;
