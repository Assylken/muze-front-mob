import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import NavContainer from "./components/NavContainer";
import { store } from "./redux/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavContainer />
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaProvider>
  );
}
