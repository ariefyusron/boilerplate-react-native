import { StyleSheet } from "react-native";

import { heightPercent } from "../../utils";
import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: COLORS.background,
  },
  wrapImage: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  engine: {
    position: "absolute",
    zIndex: 1,
    top: 5,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  wrapAuthor: {
    alignItems: "flex-end",
  },
  wrapButtonIcon: {
    width: "100%",
    alignItems: "center",
  },
  buttonIcon: {
    padding: 10,
    alignItems: "center",
  },
  wrapContent: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
    flex: 1,
    marginBottom: 30,
    height: heightPercent(40),
  },
  content: {
    width: "80%",
    backgroundColor: COLORS.background,
    borderRadius: 10,
    height: "100%",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 5,
  },
  header: {
    padding: 10,
    borderBottomColor: COLORS.black01,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    paddingVertical: 5,
    flex: 1,
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapEmptyData: {
    paddingTop: 50,
    alignItems: "center",
  },
  input: {
    padding: 0,
    paddingRight: 5,
    flex: 1,
  },
});

export default styles;
