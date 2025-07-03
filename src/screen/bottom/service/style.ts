
import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerContainer: { alignItems: "center", justifyContent: "center", paddingBottom: 20 },
  headerImage: { width: "100%", height: 270, position: "absolute" },
  title: { fontSize: 40, fontWeight: "bold", color: "#fff", marginTop: 50, alignSelf: "center" },
  subtitle: { fontSize: 20, color: "#fff", alignSelf: "center" },
  searchBar: { marginTop: 20, width: width * 0.9, padding: 10, backgroundColor: "#fff", borderRadius: 20, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 5 },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginTop: 20, marginLeft: 15, color: "black" },
  cityCard: { alignItems: "center", marginHorizontal: 10 },
  cityImage: { width: 120, height: 120, borderRadius: 20 },
  cityText: { marginTop: 10, fontWeight: "700", textAlign: "center", color: "#000000" },
  serviceCard: { margin: 10 },
  serviceImage: { width: 180, height: 120, borderRadius: 10 },
  list: {
    padding: 12,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 10,
    elevation: 1,
    marginHorizontal: 3
  },
  image: {
    width: 178,
    height: 154,
  },

  cardContent: {
    bottom: 10,
    marginLeft: 10
  },

  imagBag: {
    width: 120,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 20,
    overflow: "hidden",

  },

  rowView: { marginHorizontal: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between", }

});
export default styles;
