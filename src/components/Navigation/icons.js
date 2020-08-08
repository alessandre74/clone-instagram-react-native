import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

const icons = {
  Home: {
    lib: MaterialCommunityIcons,
    name: 'home-outline',
    focus: 'home',
  },
  Search: {
    lib: Ionicons,
    name: 'ios-search',
    focus: 'md-search',
  },
  Camera: {
    lib: FontAwesome,
    name: 'plus-square-o',
    focus: 'plus-square',
  },
  Activity: {
    lib: Ionicons,
    name: 'md-heart-empty',
    focus: 'md-heart',
  },
  Profile: {
    lib: FontAwesome,
    name: 'user-o',
    focus: 'user',
  },
}

export default icons
