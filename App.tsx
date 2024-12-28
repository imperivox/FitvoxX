import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/navigation";
import { AuthNavigator } from "./src/navigation/AuthNavigator";
import { MainNavigator } from "./src/navigation/MainNavigator";
import { supabase } from "./src/lib/supabase";
import { Session } from "@supabase/supabase-js";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>{session ? <Stack.Screen name="Main" component={MainNavigator} /> : <Stack.Screen name="Auth" component={AuthNavigator} />}</Stack.Navigator>
    </NavigationContainer>
  );
}
