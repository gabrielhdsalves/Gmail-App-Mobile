import { View, TextInput, Text } from 'react-native';
import { ReactNode } from 'react';

type InputProps = {
    children: ReactNode;
}

function Input({children}: InputProps) {
 return (
   <View className='w-full h-14 bg-gray-800 rounded-lg p-4 flex-row items-center gap-4'>
    {children}
   </View>
  );
}

function InputField() {

}