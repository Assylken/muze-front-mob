import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavContainer from './components/NavContainer';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavContainer />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
