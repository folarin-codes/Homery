import styles from "@/styles";
import { ScrollView, Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import AuthButton from "./component/Button";
import Button  from "@/components/Button";
import { COLORS, SIZES } from "@/theme/styles";
import authStyles from "./styles";
import { Checkbox } from "react-native-paper";
import { router } from "expo-router";

const google = require('../../assets/images/google.png')
const apple = require('../../assets/images/apple.png')



const Login = ()=>{

    const [checked, setChecked] = useState(false);

    return(
        <SafeAreaView style={styles.container}> 
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/logo.png')} style={{alignSelf:'center',width:104, height:40}} resizeMode="contain" />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View>
                    <Text style={styles.heading}>Login</Text>
                    <Text style={styles.secondaryHeading}>"Welcome back dear users"</Text>
                </View>

                <View style={{gap:10, marginVertical:20}}>
                    <AuthButton service="Google" image={google}/>
                    <AuthButton service="Apple" image={apple}/>
                </View>

                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={{backgroundColor:"#E1DBF0", height:1, width:'40%'}}/>
                    <Text style={{marginHorizontal:20, fontFamily:'medium', fontSize:SIZES.regular}}>OR</Text>
                    <View style={{backgroundColor:"#E1DBF0", height:1, width:'40%'}}/>
                </View>

                <View>
                    <View style={authStyles.fieldView}>
                        <Text style={authStyles.fieldText}>Phone number</Text>
                        <TextInput caretHidden={true} style={authStyles.input}/>
                    </View>
                    <View style={authStyles.fieldView}>
                        <Text style={authStyles.fieldText} >Password</Text>
                        <TextInput caretHidden={true} style={authStyles.input}/>
                    </View>
                  
                </View>

                <View style={{flexDirection:"row", marginTop:10, alignItems:'center', justifyContent:"space-between"}}>
                    <View style={{flexDirection:'row', gap:5, alignItems:'center'}}>
                    <Checkbox status={checked ? 'checked' : 'unchecked'} color={COLORS.background} onPress= { ()=> setChecked(!checked)} uncheckedColor={COLORS.background} />
                    <Text style={{textAlign:'center', fontFamily:"light"}}>Remember me</Text>
                    </View>
                    <TouchableOpacity onPress={()=> router.push('/forget-password')}>
                        <Text style={{fontFamily:'medium', color:COLORS.primary}}>Forget password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical:30}}>
                    <Button text="Continue" textColor={COLORS.white} onPress={()=> router.push('/')} />

                </View>

            </ScrollView>

        </SafeAreaView>
    )

}

export default Login;