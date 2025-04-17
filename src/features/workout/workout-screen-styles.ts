import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  mainTitle: {
    color: "#333",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 24,
  },
  title: {
    color: "#333",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 16,
  },
  todoItem: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  checkedItem: {
    backgroundColor: "#dbefdc",
  },
  checkboxWrapper: {
    marginRight: 14,
  },
  checkmark: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  checkedCheckmark: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  checkmarkIcon: {
    width: 5,
    height: 10,
    borderColor: "#fff",
    borderWidth: 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    transform: [{ rotate: "45deg" }],
  },
  todoContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },
  todoText: {
    color: "#333",
    fontSize: 16,
    width: "100%",
  },
  todoNumberContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  todoNumber: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },
});
