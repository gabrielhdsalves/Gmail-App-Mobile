import { View } from 'react-native';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
 return (
   <Drawer 
   defaultStatus='open'
   screenOptions={{
    headerShown: false,

   }}>
    <Drawer.Screen name='(tabs)'/>
   </Drawer>
  );
}