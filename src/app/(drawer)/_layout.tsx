import { View } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerContent } from '@/components/drawer-content';
import { CustomOptions } from '@/types/navigation';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "75%",
        }
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='(tabs)'
        options={
          {
            title: "Caixa de entrada de e-mails",
            iconName: "all-inbox",
            isDividir: true,
            notifications: 5,
          } as CustomOptions

        }
      />

      <Drawer.Screen name='inbox'
        options={
          {
            title: "Caixa de Entrada",
            iconName: "inbox",
            isDividir: false,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='stars'
        options={
          {
            title: "Com estrelas",
            iconName: "star-outline",
            isDividir: false,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='postponed'
        options={
          {
            title: "Adiados",
            iconName: "schedule",
            isDividir: true,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='important'
        options={
          {
            title: "Importantes",
            iconName: "label-important-outline",
            isDividir: false,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='send'
        options={
          {
            title: "Enviados",
            iconName: "send",
            isDividir: false,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='programmed'
        options={
          {
            title: "Programado",
            iconName: "schedule-send",
            isDividir: false,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='exit-box'
        options={
          {
            title: "Caixa de Saída",
            iconName: "outbox",
            isDividir: false,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='sketch'
        options={
          {
            title: "Rascunho",
            iconName: "note",
            isDividir: false,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='all-emails'
        options={
          {
            title: "Todos os e-mais",
            iconName: "email",
            isDividir: false,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='span'
        options={
          {
            title: "Spam",
            iconName: "info-outline",
            isDividir: false,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='trash'
        options={
          {
            title: "Lixeira",
            iconName: "delete-outline",
            isDividir: false,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='read'
        options={
          {
            title: "Lidos",
            iconName: "label-important-outline",
            sectionTitle: "Marcadores",
          } as CustomOptions
        }
      />

      <Drawer.Screen name='general'
        options={
          {
            title: "Geral",
            iconName: "label-important-outline",
            isDividir: true,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='new-marker'
        options={
          {
            title: "Criar Novo",
            iconName: "add",
            isDividir: true,
          } as CustomOptions
        }
      />

      <Drawer.Screen name='config'
        options={
          {
            title: "Configurações",
            iconName: "settings",
          } as CustomOptions
        }
      />

      <Drawer.Screen name='feedback'
        options={
          {
            title: "Feedback",
            iconName: "feedback",
          } as CustomOptions
        }
      />
      <Drawer.Screen name='help'
        options={
          {
            title: "Ajuda",
            iconName: "help-outline",
          } as CustomOptions
        }
      />
    </Drawer>
  );
} 