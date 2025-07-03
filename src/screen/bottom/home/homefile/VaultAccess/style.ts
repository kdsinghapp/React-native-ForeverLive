
import { StyleSheet } from 'react-native';
 const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    marginBottom: 20
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    alignSelf: 'center'
  },
  input: {
    padding: 12,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: "#F7F8F8"
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  label: {
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 10,
    color: "#393F48"
  },
  uploadBox: {
    height: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: "#F7F8F8"
  },
  availabilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  timeText: {
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6
  },
  dayText: {
    width: 80
  },
  submitButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 15,
    alignItems: 'center'
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  updImg: {
    height: 24,
    width: 24,
    resizeMode: "contain"
  },
  updTitle: {
    color: "#949494",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 5
  },
  inputText: {
    color: "black",
    fontSize: 14,
    height:40

  } ,
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    justifyContent: 'space-between',
   },
  day: {
    width: 80,
    color: '#555',
    fontWeight: '500',
  },
  timeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    minWidth: 70,
    justifyContent: 'space-between',
    margin:8
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
   },
  dropdown: {
    width: 120,
    maxHeight: 300,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 8,
  },
  timeOption: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  title:{
    fontSize: 14,
    color: "black",
    fontWeight: "600",
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeSection: {
    flex: 1,
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  subLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
    marginBottom: 2,
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  timeIcon: {
    height: 12,
    width: 12,
    marginLeft: 6,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '90%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

});
export default styles;
