import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
  },
  content: {
    width: "80%",
    backgroundColor: COLORS.background,
    borderRadius: 10,
    marginTop: 50,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  button: {
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
  },
  border: {
    borderBottomColor: COLORS.black02,
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 16,
  },
  wrapIcon: {
    position: "absolute",
    right: 10,
    top: 20,
  },
});

export default styles;
