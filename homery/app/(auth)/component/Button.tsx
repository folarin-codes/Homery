import { TouchableOpacity, View, Text , Image} from "react-native"

interface ButtonProp{
    service: string,
    image: string
}

const AuthButton = (item:ButtonProp)=>{

    const {service, image} = item;
    return(
        <TouchableOpacity style={{height:60, borderWidth:1, borderColor:"black", borderRadius:8,justifyContent:'center', backgroundColor:'white'}}>

            <View style={{flexDirection:'row', alignItems:'center', gap:5, alignSelf:"center"}}>
                <Image source={image} alt='logo' style={{width:`${service =='google'}`? 18 : 24, height:`${service == 'google'}`? 18 : 24}}/>
                <Text>Continue with {service}</Text>
            </View>


        </TouchableOpacity>
    )

}

export default AuthButton;