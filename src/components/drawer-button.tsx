
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View, PressableProps } from "react-native";
import { colors } from '@/styles/colors';
import { clsx } from "clsx";

export type IconNameProps = keyof typeof MaterialIcons.glyphMap;

type DrawerButtonProps = PressableProps &{ 
    title: string;
    isFocused?: boolean;
    isDividir?: boolean;
    iconNome: IconNameProps;
    notifications?: number;
}


export function DrawerButton({title, isFocused, isDividir, iconNome, notifications, ...rest}: DrawerButtonProps){
    return (
        <Pressable className={clsx("py-2 w-full", {"border-b border-gray-500": isDividir})}
        {...rest}>
            <View className={clsx("flex-row items-center gap-4 h-14 px-6 -ml-2 w-full",{
                "-ml-14": isDividir}

            )}>
                <MaterialIcons name={iconNome} size={20} color={colors.orange[300]} />
                <Text className={clsx("text-white font-subtitle text-base flex-1", {
                    "text-orange-300": isFocused,
                })}>
                    {title}
                </Text>
                <Text className={clsx ("text-gray-400 text-sm font-body", {
                    "text-orange-300": isFocused,
                })}>
                    {notifications}
                </Text>
            </View>
        </Pressable>
    )
}   