import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to the first onboarding page
  return <Redirect href="/onboarding/page1" />;
}
