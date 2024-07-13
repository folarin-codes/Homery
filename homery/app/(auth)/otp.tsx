import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {Text, View, Image} from  'react-native'
import styles from "@/styles";
import authStyles from "./styles";
import Button from "@/components/Button";
import { COLORS } from "@/theme/styles";
import { router } from "expo-router";

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';


const OTP = ()=>{

    const CELL_COUNT = 6;

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.logoContainer}>
                <Image source={require('../../assets/images/logo.png')} style={{alignSelf:'center',width:104, height:40}} resizeMode="contain" />
            </View>

            <View style={{marginBottom:20}}>
                <Text style={styles.heading}>OTP Verification</Text>
                <Text style={styles.secondaryHeading}>"Enter the OTP received below"</Text>
            </View>

            <View style={authStyles.fieldView}>
                <Text style={authStyles.fieldText}>OTP</Text>

                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={4}
                    rootStyle={[authStyles.codeFieldRoot, {marginHorizontal:10}]}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    // autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
                    testID="my-code-input"
                    renderCell={({index, symbol, isFocused}) => (
                    <Text
                        key={index}
                        style={[authStyles.cell, isFocused && authStyles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor/> : null)}
                    </Text>
                    )}
                />

            </View>

            <View style={{marginTop:20}}>
                <Button text="Confirm" textColor={COLORS.white} onPress={()=> router.push('/')}/>
            </View>


        </SafeAreaView>
    )
}

export default OTP;