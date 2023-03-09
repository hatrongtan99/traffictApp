import { View, Text, StyleSheet } from "react-native";

const SystemInfo = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Thông tin hệ thống</Text>
      </View>

      <View style={styles.inforWrap}>
        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>6</Text>
          <View style={styles.infoText}>
            <Text style={[styles.infoStatus, { color: "#28af6f" }]}>
              Bình thường
            </Text>

            <Text style={styles.infoHour}>03:30:33</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>4</Text>
          <View style={styles.infoText}>
            <Text style={[styles.infoStatus, { color: "#f40d0d" }]}>Sự cố</Text>

            <Text style={styles.infoHour}>03:30:33</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoNumber}>2</Text>
          <View style={styles.infoText}>
            <Text style={[styles.infoStatus, { color: "#f6f600" }]}>
              Bảo trì
            </Text>

            <Text style={styles.infoHour}>03:30:33</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 140,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#79bbfd",
    shadowOffset: {
      width: -3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,

    elevation: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
  },

  inforWrap: {
    paddingTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  infoItem: {
    alignItems: "center",
    marginRight: 30,
  },

  infoNumber: {
    fontSize: 34,
    fontWeight: "500",
  },

  infoText: {
    marginTop: 6,
  },

  infoStatus: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  infoHour: {
    color: "#28af6f",
  },
});

export default SystemInfo;
