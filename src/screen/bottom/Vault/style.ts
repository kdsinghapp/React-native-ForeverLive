import { StyleSheet, Dimensions, Platform } from 'react-native';
import font from '../../../theme/font';

const { width } = Dimensions.get('window');
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
  header: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 12,
    marginHorizontal:15
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    marginHorizontal:15,
    marginTop:15

  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    marginRight: 10,
    height:46,
    justifyContent:"center"
  },
  activeTab: {
    backgroundColor: '#6C5DD3',
  },
  tabText: {
    color: '#000',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 1,
  
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  fabGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabPlus: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default styles;
