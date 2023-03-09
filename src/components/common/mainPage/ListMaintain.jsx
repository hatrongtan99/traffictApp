import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { DataTable } from "react-native-paper";
import { RadioButton } from "react-native-paper";

const data = [
  {
    id: "BDU.168.016,100",
    time: "03:30:33",
    check: false,
  },
  {
    id: "BDU.168.016,100",
    time: "03:30:33",
    check: true,
  },
  {
    id: "BDU.168.016,100",
    time: "03:30:33",
    check: false,
  },
  {
    id: "BDU.168.016,100",
    time: "03:30:33",
    check: false,
  },
  {
    id: "BDU.168.016,100",
    time: "03:30:33",
    check: true,
  },
  {
    id: "BDU.168.016,100",
    time: "03:30:33",
    check: false,
  },
  {
    id: "BDU.168.016,100",
    time: "03:30:33",
    check: true,
  },
  {
    id: "BDU.168.016,100",
    time: "03:30:33",
    check: false,
  },
];

const ListMaintain = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topTitle}>Danh sách bảo trì</Text>
        <TouchableHighlight onPress={() => {}} underlayColor={"transparent"}>
          <View style={styles.topButton}>
            <Text style={styles.topButtonText}>BẢO TRÌ</Text>
          </View>
        </TouchableHighlight>
      </View>

      <DataTable style={styles.table}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title
            textStyle={styles.tableHeaderTitle}
            style={{ flex: 1 }}
          >
            STT
          </DataTable.Title>
          <DataTable.Title
            textStyle={styles.tableHeaderTitle}
            style={{ flex: 4 }}
          >
            ID Tủ Chiếu Sáng
          </DataTable.Title>
          <DataTable.Title
            textStyle={styles.tableHeaderTitle}
            style={{ flex: 2 }}
          >
            Thời Gian
          </DataTable.Title>
          <DataTable.Title
            textStyle={styles.tableHeaderTitle}
            style={{ flex: 2 }}
            numeric
          >
            Chọn
          </DataTable.Title>
        </DataTable.Header>

        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <DataTable.Row
              key={index}
              style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
            >
              <DataTable.Cell style={{ flex: 1 }}>{index + 1}</DataTable.Cell>

              <DataTable.Cell
                style={{ flex: 4 }}
                textStyle={{ fontSize: 16, fontWeight: "500" }}
              >
                {item.id}
              </DataTable.Cell>

              <DataTable.Cell
                style={{ flex: 2 }}
                textStyle={{ color: "#53b96f" }}
              >
                {item.time}
              </DataTable.Cell>

              <DataTable.Cell style={{ flex: 2 }} numeric>
                <RadioButton
                  status={item.check ? "checked" : "unchecked"}
                  color="#7bed8d"
                />
              </DataTable.Cell>
            </DataTable.Row>
          )}
          keyExtractor={(item, index) => index}
        ></FlatList>
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 340,
    width: "100%",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topTitle: {
    alignSelf: "flex-end",
    color: "#333",
    fontSize: 20,
    fontWeight: "500",
  },
  topButton: {
    backgroundColor: "#1a8dff",
    width: 110,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  topButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },

  table: {
    height: 290,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "scroll",
  },
  tableHeader: {
    backgroundColor: "#4c57f9",
  },

  tableHeaderTitle: {
    color: "#fff",
    fontSize: 18,
  },
});

export default ListMaintain;
