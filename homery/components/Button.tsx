import { TouchableOpacity, Text } from "react-native"
import { ActivityIndicator } from "react-native-paper"
import { SIZES, COLORS } from "@/theme/styles"

interface ButtonProp{
    text: string,
    isLoading?: boolean,
    buttonStyle?:{
        backgroundColor?:string,
        borderColor:string,
    
    },
    textColor: string
    onPress: ()=> void
}


const Button = (item:ButtonProp)=>{
    const{text, isLoading, textColor,buttonStyle, onPress} = item;
    return(

        <TouchableOpacity style={{height:60, backgroundColor:COLORS.primary, borderRadius:8, borderWidth:1, justifyContent:"center", borderColor:COLORS.primary, ...buttonStyle}} onPress={onPress}>
            {
                isLoading ? <ActivityIndicator style={{alignSelf:'center'}}/> : <Text style={{color:textColor, fontFamily:'medium', alignSelf:'center'}}>{text}</Text>
            }

        </TouchableOpacity>

    )
}


export default Button;