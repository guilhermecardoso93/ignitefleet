import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Departure } from "../screens/SignIn/Departure";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='departure'
        component={Departure}
      />
    </Navigator>
  )
}