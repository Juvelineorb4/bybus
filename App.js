import 'react-native-gesture-handler';
import Navigation from "@/routes/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

// amplify configure
import { Amplify } from 'aws-amplify'
// vista login predeterminada
import { withAuthenticator } from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports'



Amplify.configure(awsconfig)
function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
    signUpFields: [
      { label: "Name", key: "name", required: true, type: "string" }
    ]
  }
});