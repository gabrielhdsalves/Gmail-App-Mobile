import { View, Text, FlatList } from 'react-native';
import { Input } from '../../../components/input';
import MenuButton from '../../../components/menu-button';
import Avatar from '../../../components/avatar';
import Email from '../../../components/email';
import { EMAILS } from '../../utils/email';
import { FloatButton } from '../../../components/float-button';

export default function Home() {
  return (
    <View className='flex-1 bg-gray-900 pt-14 p-4'>
      <Input>
        <MenuButton></MenuButton>
        <Input.Field placeholder='Pesquisar no e-mail'>
        </Input.Field>
        <Avatar source={{ uri: "https://github.com/gabrielhdsalves.png" }} size='small' />
      </Input>
      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerStyle={{gap: 10}}
        ListHeaderComponent={() => (
          <Text className="mt-6 font-subtitle text-sm text-gray-400">
            Todas as Cx. entrada
          </Text>
        )}
      />
      <FloatButton icon='edit'/>
    </View>
  );
}