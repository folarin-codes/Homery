

import { StyleSheet } from "react-native";
import { SIZES } from "./theme/styles";
import { size } from "react-native-responsive-sizes";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:20

    },
    heading:{
        fontFamily:'medium',
        fontSize:SIZES.large,
        textAlign:'center',
        marginBottom:size(10)
    },
    secondaryHeading:{
        fontFamily:'light',
        textAlign:'center'
    },
    logoContainer:{
        marginVertical:30
    }
})

export default styles;