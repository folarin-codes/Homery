import { StyleSheet, Text, View , FlatList} from "react-native";
import { useState , useRef, useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Onboarding from "./onboarding/onboarding";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
// import useFont from "../hooks/useFonts";
// import Onboarding from "../onboarding/onboarding.js";

SplashScreen.preventAutoHideAsync();

export default function Page() {

 
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        regular : require('../assets/fonts/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Regular.otf'),
        medium :require('../assets/fonts/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Medium.otf'),
        bold: require('../assets/fonts/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Bold.otf'),
        light: require('../assets/fonts/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Light.otf')
      });
    
      useEffect(() => {
        if (loaded) {
          SplashScreen.hideAsync();
        }
      }, [loaded]);
    
      if (!loaded) {
        return null;
      }
    

  return (
    <SafeAreaView style={styles.container}>
      <Onboarding/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'white'
  },

 
});
