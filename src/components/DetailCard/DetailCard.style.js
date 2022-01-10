import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  inner_container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "eceff1",
    marginHorizontal: 15,
    marginVertical: 5,
  },

  image: {
    marginBottom: 10,
    width: deviceSize.width * 0.9,
    height: deviceSize.height / 3,
    resizeMode: "cover",
  },

  text_container: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },

  title: {
    marginHorizontal: 10,
    marginVertical: 5,
    color: "#86112E",
    fontSize: 30,
    fontWeight: "bold",
  },

  text: {
    fontSize: 15,
    marginBottom:15,
  },

  button:{
    color: "red",
    borderRadius:10
  }
});
