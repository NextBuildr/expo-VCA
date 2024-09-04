import { Stack, useSegments, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
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
    <Stack>
      {/* Splash Screen */}
      <Stack.Screen name="splash/index" options={{ headerShown: false }} />

      {/* Onboarding Stack */}
      <Stack.Screen name="onboarding/page1" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding/page2" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding/page3" options={{ headerShown: false }} />
  

      {/* Auth Stack */}
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
      <Stack.Screen name="auth/check-mail" options={{ headerShown: false }} />
      <Stack.Screen name="auth/congrats-mail" options={{ headerShown: false }} />


      {/* <Stack.Screen
        name="auth/forgot-password"
        options={{ headerShown: false }}
      /> */}

      {/* Main App Stack */}
      {/* <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="contacts" options={{ headerShown: false }} />
      <Stack.Screen name="call" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
