import { StatusBar } from 'expo-status-bar';
import {View , Text} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <StatusBar backgroundColor='red'/>
            <Text style={{color:'red'}}>Home</Text>

        </SafeAreaView>

    )
}

export default Home;