
import { StyleSheet } from 'react-native';
import font from '../../../../../theme/font';
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  dateRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  dateItem: {
    width: 45,
     borderRadius: 20,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    height:100

   },
  dateItemSelected: {
    backgroundColor: '#3658AE',
    height:100
  },
  dateLabel: {
    fontSize: 14,
    color: '#888',
  },
  dateNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
  eventContainer: {
    marginBottom: 10,
  },
  eventDate: {
    backgroundColor: '#E0E6FF',
    paddingHorizontal: 16,
    paddingVertical: 10,
     color: 'black',
    fontFamily:font.PoppinsMedium

  },
  eventCard: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
 
   },
  eventTitle: {
     fontSize: 16,
    marginBottom: 4,
    color: '#000',
    fontFamily:font.PoppinsSemiBold

  },
  eventDescription: {
    fontSize: 14,
    color: '#9E9FA5',
    marginBottom:5,
    marginTop:1
    ,
    fontFamily:font.PoppinsRegular
  },
});

export default styles;
