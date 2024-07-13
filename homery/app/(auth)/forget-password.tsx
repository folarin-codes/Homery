import { SafeAreaView } from "react-native-safe-area-context";
import {Text, View, Image, TextInput} from  'react-native'
import styles from "@/styles";
import authStyles from "./styles";
import Button from "@/components/Button";
import { COLORS } from "@/theme/styles";
import { router } from "expo-router";



const ForgetPassword = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/logo.png')} style={{alignSelf:'center',width:104, height:40}} resizeMode="contain" />
            </View>

            <View style={{marginBottom:20}}>
                <Text style={styles.heading}>Forget Password</Text>
                <Text style={styles.secondaryHeading}>"Enter your email to receive an OTP"</Text>
            </View>

            <View style={authStyles.fieldView}>
                <Text style={authStyles.fieldText}>Email</Text>
                <TextInput style={authStyles.input}/>
            </View>

            <View style={{marginTop:30}}>
                <Button text="Continue" textColor={COLORS.white} onPress={()=> router.push('/otp')}/>
            </View>


        </SafeAreaView>

    )
}

export default ForgetPassword;