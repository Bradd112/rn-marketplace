import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import LoginScreen from "./Apps/Screens/LoginScreen";
import {ClerkProvider, SignedIn, SignedOut} from "@clerk/clerk-expo";
import HomeScreen from "./Apps/Screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import TabNavigation from "./Apps/Navigations/TabNavigation";

export default function App() {
    return (
        <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <View className="flex-1 bg-white">
                <StatusBar style="auto"/>

                <SignedIn>
                    <NavigationContainer>
                        <TabNavigation/>
                    </NavigationContainer>
                </SignedIn>

                <SignedOut>
                    <LoginScreen/>
                </SignedOut>
            </View>
        </ClerkProvider>
    );
}
