import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { somethingrandom } from '../firebaseConfig'
import colors from '../assets/colors/colors'
import Ionicons from "@expo/vector-icons/Ionicons"

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = getAuth()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("TabNavigator")
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("Registered with:", user.email)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Logged in with:", user.email)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    


  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
        <View style={styles.travelLogoWrapper}>
            <Ionicons style={styles.TravelLogo} name="earth" size={100} color={colors.orange}/>
            <Text style={styles.travelLogoText}>Travel App</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Email'
                value={email} 
                onChangeText={text => setEmail(text)}
                style={styles.input}/>

            <TextInput
                placeholder='Password'
                value={password} 
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry/>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={() =>{handleLogin()}}
            style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>      
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() =>{handleSignUp()}}
            style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>Register</Text>      
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white
    },
    travelLogoWrapper:{
        alignItems: "center",
        marginBottom: 40
    },
    TravelLogo:{
        marginBottom: 20
    },
    travelLogoText:{
        fontFamily: "Lato-Bold",
        fontSize: 26,
        color: colors.orange
    },
    inputContainer: {
        width: "80%",
    },
    input: {
        backgroundColor: colors.gray,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    button: {
        backgroundColor: colors.orange,
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: colors.orange,
        borderWidth: 2,
    },
    buttonText: {
        color:"white",
        fontWeight: 700,
        fontSize: 16
    },
    buttonOutlineText: {
        color: colors.orange,
        fontWeight: 700,
        fontSize: 16
    },
})