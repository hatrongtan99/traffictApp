import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
} from 'react-native';

const ButtonAuth = ({handlePress, title, icon, fill, styleText}) => {
  return (
    <TouchableHighlight
      onPress={handlePress}
      underlayColor="#12d382"
      style={{borderRadius: 30}}>
      <View
        style={[
          styles.button,
          {backgroundColor: fill ? '#1aa23f' : 'inherit'},
        ]}>
        {icon ? icon : null}
        <Text
          style={[
            styles.text,
            {color: fill ? 'white' : '#1aa23f', ...styleText},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('screen') <= 280 ? 40 : 60,
    width: Dimensions.get('screen') <= 280 ? 220 : 300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Dimensions.get('screen') <= 280 ? 20 : 30,
  },
  text: {
    fontSize: Dimensions.get('screen') <= 280 ? 20 : 24,
    fontWeight: '500',
  },
});

export default ButtonAuth;
