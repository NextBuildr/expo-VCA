import { Stack, useSegments, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { AuthProvider, AuthContext } from '../context/AuthContext';
// import { ThemeProvider } from '../navigation/ThemeProvider';

export default function Layout() {
  return (
    // <ThemeProvider>
    //   <AuthProvider>
    <AppNavigator />
    //   </AuthProvider>
    // </ThemeProvider>
  );
}

function AppNavigator() {
  //   const { user } = useContext(AuthContext);
  const segments = useSegments();
  const router = useRouter();

  //   useEffect(() => {
  //     const inAuthGroup = segments[0] === 'auth';
  //     const inOnboardingGroup = segments[0] === 'onboarding';

  //     // Redirect to appropriate stack based on authentication state
  //     if (!user && !inAuthGroup && !inOnboardingGroup) {
  //       router.replace('/onboarding/page1');
  //     } else if (user && (inAuthGroup || inOnboardingGroup)) {
  //       router.replace('/home');
  //     }
  //   }, [user, segments]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        {/* Splash Screen */}
        <Stack.Screen name="splash/index" options={{ headerShown: false }} />

        {/* Onboarding Stack */}
        <Stack.Screen
          name="onboarding/page1"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboarding/page2"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboarding/page3"
          options={{ headerShown: false }}
        />

        {/* Auth Stack */}
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
        <Stack.Screen name="auth/check-mail" options={{ headerShown: false }} />
        <Stack.Screen
          name="auth/email-verification"
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="auth/create-password"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="auth/congrats-mail"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="auth/forget-password"
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="auth/reset-success"
          options={{ headerShown: false }}
        />

        {/* Main App Stack */}
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="contact" options={{ headerShown: false }} />
        <Stack.Screen name="create-contact" options={{ headerShown: false }} />
        <Stack.Screen name="call" options={{ headerShown: false }} />
        <Stack.Screen name="schedule" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
        <Stack.Screen name="change-password" options={{ headerShown: false }} />
        <Stack.Screen name="notification" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
        {/* <Stack.Screen name="edit-profile" options={{ headerShown: false }} /> */}
      </Stack>
    </GestureHandlerRootView>
  );
}
