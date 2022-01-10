import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    container: { 
    flex: 1, 
    backgroundColor: "#ffc107", 
},
  inner_container: {
    marginHorizontal: 7,
    marginVertical: 7,
    flexDirection: "column",
  },
  image: {
    height: deviceSize.height / 2.5,
    resizeMode: "cover",
    borderRadius: 15,
  },
  title: {
    paddingHorizontal: 5,
    width: "100%",
    backgroundColor: "#00000099",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: 5,
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 25,
    fontWeight: "bold",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});