import { Stack } from "expo-router"

const AuthLayout = ()=>{
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="sign-up"/>
            <Stack.Screen name="login"/>
            <Stack.Screen name='forget-password'/>
            <Stack.Screen name="otp"/>

        </Stack>
    )
}

export default AuthLayout;