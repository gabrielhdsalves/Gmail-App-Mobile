
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { colors } from '@/styles/colors';


type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export function FloatButton({icon, ...rest}: FloatButtonProps) {
  return (
    <TouchableOpacity
    className="absolute bottom-4 right-4 flex-row items-center gap-2 rounded-full bg-gray-600 px-4 py-4"
    activeOpacity={0.7}
    {...rest}
  >
    {icon && <MaterialIcons name={icon} size={22} color={colors.orange[500]} />}

    <Text className="font-body text-base text-orange-500">Escrever</Text>
  </TouchableOpacity>
  );
}