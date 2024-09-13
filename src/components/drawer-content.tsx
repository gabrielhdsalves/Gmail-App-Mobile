import { View, Image, Text } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerButton } from '@/components/drawer-button'; 
import { CustomOptions } from '@/types/navigation';

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className='flex-1 bg-gray-600 overflow-hidden'>
      <View className='mt-20 w-full border-b pb-6 border-gray-500'>
        <Image source={require("@/assets/logo.png")} className='w-28 ml-5' resizeMode='contain'>

        </Image>
      </View>


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >

<View className="mt-2">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index
            const options = drawerProps.descriptors[route.key].options as CustomOptions

            if (options.title === undefined) {
              return
            }

          

            return (
              <View key={route.key} className="w-full">
              
                <DrawerButton
                  title={options.title}
                  iconNome={options.iconName}
                  isDividir={options.isDividir}
                  isFocused={isFocused}
                />
              </View>
            )
          })}
        </View>

      </ScrollView>


    </View>
  );
}