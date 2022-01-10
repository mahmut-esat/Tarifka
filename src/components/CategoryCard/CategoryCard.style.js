import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffc107" },
  inner_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 15,
    marginVertical: 5,
    borderBottomLeftRadius: 50,
    borderTopStartRadius: 50,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderWidth: 2,
    borderColor: "#6c757d",
  },
  image: { width: 100, height: 100, resizeMode: "contain" },
  text_container: { marginHorizontal: 10 },
  title: { fontSize: 20 },
});
