import { ActivityIndicator } from "react-native";

import { View } from 'react-native';

export default function Loading() {
 return (
   <ActivityIndicator className="flex-1 bg-gray-900 items-center justify-center"/>
  );
}