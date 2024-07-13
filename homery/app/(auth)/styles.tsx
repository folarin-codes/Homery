import { COLORS } from "@/theme/styles";
import { StyleSheet } from "react-native";
import { size } from "react-native-responsive-sizes";


const authStyles = StyleSheet.create({
    input:{
        backgroundColor:COLORS.background,
        height : size(60),
        borderRadius:8,
        paddingLeft:size(10),
        
    },
    fieldText:{
        fontFamily:'medium',
        color:COLORS.text
    },
    fieldView:{
        marginVertical:5,
        gap:5
    },
    codeFieldRoot: {marginTop: 10, marginHorizontal:30},
    cell: {
      width: 70,
      height: 70,
      lineHeight: 38,
      fontSize: 24,
      textAlign: 'center',
      backgroundColor:COLORS.background,
      borderRadius:10
    },
    focusCell: {
      borderColor: '#000',
    },
})

export default authStyles;