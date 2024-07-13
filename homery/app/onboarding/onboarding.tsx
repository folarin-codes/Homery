import { SafeAreaView } from "react-native-safe-area-context"
import{View , Text, Image, Dimensions} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import Button from "@/components/Button";

import data from "./data";
import { COLORS, SIZES } from "@/theme/styles";
import { router } from "expo-router";

const Onboarding = ()=>{

    const {height , width} = Dimensions.get('window')
    return(
        <AppIntroSlider dotStyle={{backgroundColor:COLORS.background}} activeDotStyle={{backgroundColor:COLORS.primary, width:27}} data={data} renderItem={({item})=>{
            return(
                <View>
                    <View style={{height:height*.6}}>
                        <Image source={item.image} resizeMode="contain" style={{ width:'80%', alignSelf:"center", height:height}} />
                    </View>

                    <View style={{height:height*.4, backgroundColor:"white", zIndex:1, position:'relative', paddingTop:40, paddingHorizontal:20}}>
                        <Text style={{textAlign:'center', fontFamily:'medium', fontSize:SIZES.large}}>{item.heading}</Text>
                        <Text style={{textAlign:'center', fontFamily:'light', marginTop:10}}>{item.text}</Text>

                        <View style={{marginTop:30}}>

                          <Button text="Sign up" textColor={COLORS.white} onPress={()=> router.push('/sign-up')} />

                          {
                            item.id == 3 && <View style={{marginTop:10}}>
                                <Button text="Login" textColor={COLORS.primary} buttonStyle={{backgroundColor:'white', borderColor:COLORS.primary}} onPress={()=> router.push('/login')}/>
                            </View>
                          }

                        </View>

                    </View>

                </View>

            )
        }}/>
     
    )
}

export default Onboarding;