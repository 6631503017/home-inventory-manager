import "@/global.css"
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  const [fontsLoaded] = useFonts({
    'Kanit': require('../assets/fonts/Kanit-Regular.ttf'),
    'Kanit-Medium': require('../assets/fonts/Kanit-Medium.ttf'),
    'Kanit-Bold': require('../assets/fonts/Kanit-Bold.ttf'),
  });

  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync();
    } else {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: 'white' }}>
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <Tabs screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#E5E7EB',
            height: 80
          },
          tabBarActiveTintColor: '#3B82F6',
          tabBarInactiveTintColor: '#6B7280',
        }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'หน้าแรก',
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="inventory"
            options={{
              title: 'รายการ',
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="list-outline" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'โปรไฟล์',
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
      
      <StatusBar style="auto"/>

    </SafeAreaProvider>
  );
}