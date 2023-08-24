import { FlatList, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import React, { Component } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    statusCodes,
    GoogleSigninButton,
  } from '@react-native-google-signin/google-signin';


interface IProps{
    navigation?:{
        navigate:(arg:string)=>void
    }
}

interface IState{
    email:string,
    password:string,
}

export class LoginScreen extends Component<IProps,IState> {
    componentDidMount(): void {
        GoogleSignin.configure();
      }

    state:IState = {email:"",password:""}

    handleLoginPage=()=>{
        this.props.navigation?.navigate('createScreen')
    }

    getEmailTextInput=(text:string)=>{
        this.setState({email:text})
    }
    getPasswordInput=(text:string)=>{
        this.setState({password:text})
    }

    handleLogin=()=>{
            auth()
              .signInWithEmailAndPassword(this.state.email, this.state.password)
              .then(res => {
                console.log(JSON.stringify(res));
                this.props.navigation?.navigate("bottomTabs")
              })
              .catch(error => {
                console.log(error, 'login error');
              });
          };

    googleLogin= async ()=>{
        // console.log("goole login function")
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            this.props.navigation?.navigate('homeScreen');
          } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
              console.log(error, '1');
            } else if (error.code === statusCodes.IN_PROGRESS) {
              console.log(error, '2');
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              console.log(error, '3');
              // play services not available or outdated
            } else {
              console.log(error, '4');
              // some other error happened
            }
          }
    }
 
    render() {
        const {email,password} = this.state
        return (
            <SafeAreaView>
                <View style={styles.signUpstyles}>
                    <Text style={styles.headerText}>
                        Log into your account
                    </Text>
                    <View style={styles.inputStyles}>
                        <TextInput testID='emailInput' value={email}  onChangeText={(text)=>this.getEmailTextInput(text)} style={styles.inputTextStyles} placeholder='Email address'
                            placeholderTextColor='rgba(0, 0, 0, 1)' />
                    </View>
                    <View style={styles.inputStyles}>
                        <TextInput testID='password' value={password} onChangeText={(text)=>this.getPasswordInput(text)} style={styles.inputTextStyles} placeholder='Pasword'
                            placeholderTextColor='rgba(0, 0, 0, 1)' />
                    </View>
                    <TouchableOpacity >
                        <Text style={[styles.inputTextStyles, { alignSelf: 'flex-end' }]} >Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', gap: responsiveHeight(3) }}>
                    <TouchableOpacity testID='loginBtn' style={styles.btnContainer} onPress={this.handleLogin}>
                        <Text style={styles.btnText}>LOG IN</Text>
                    </TouchableOpacity>
                    <Text style={styles.orSignupText}>or log in with</Text>
                    <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                        <View style={styles.socialCont}>
                            <Image style={styles.imageStyles} source={{ uri: ('https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png') }} />
                        </View>
                        <TouchableOpacity style={styles.socialCont} onPress={this.googleLogin}>
                            <Image style={[styles.imageStyles]} source={{ uri: 'https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png' }} />
                        </TouchableOpacity>
                        <View style={styles.socialCont}>
                            <EvilIcons name="sc-facebook" color="blue" size={40} />
                        </View>
                    </View>
                </View>
                <Text testID='signupBtn' style={styles.footerText}>Don't have an account? <TouchableOpacity onPress={this.handleLoginPage}>
                    <Text style={styles.loginStyles}>Sign Up</Text>
                </TouchableOpacity></Text>
            </SafeAreaView >
        )
    }
}

export default LoginScreen

const styles = StyleSheet.create({
    loginStyles: {
        textDecorationLine: 'underline',
        marginLeft: 10,
    },

    headerText: {
        fontSize: responsiveFontSize(5),
        fontFamily: 'Product san ',
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 1)',
        width: responsiveFontSize(30),
        // marginTop:responsiveHeight(2)
    },

    orSignupText: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'Product san Light',
        fontWeight: '300',
        color: 'rgba(0, 0, 0, 1)'
    },

    footerText: {
        fontSize: responsiveFontSize(2),
        fontWeight: '400',
        fontFamily: 'Product Sans Medium',
        textAlign: 'center',
        marginTop:responsiveHeight(2),
    },

    imageStyles: {
        width: responsiveWidth(10),
        height: responsiveHeight(5),
    },

    socialCont: {
        // height:responsiveHeight(5),
        // width:responsiveWidth(10),
        borderRadius: 100,
        borderColor: 'rgba(214, 214, 214, 1)',
        borderWidth: 1,
        padding: responsiveFontSize(1),
    },

    btnText: {
        color: '#fff',
        paddingHorizontal: responsiveWidth(10),
        paddingVertical: responsiveHeight(2),
        fontSize: responsiveFontSize(2.5),
        fontWeight: '500',

    },

    btnContainer: {
        alignSelf: 'center',
        backgroundColor: 'rgba(45, 32, 28, 1)',
        borderRadius: 100,
    },

    inputTextStyles: {
        fontSize: responsiveFontSize(2),
        fontWeight: '300',
        fontFamily: 'Product Sans Light',
        padding: responsiveHeight(1)
    },

    inputStyles: {
        borderBottomWidth: 1,
        borderColor: 'rgba(214, 214, 214, 1)',
        marginVertical: responsiveHeight(2)

    },

    signUpstyles: {
        gap: responsiveHeight(5),
        padding: responsiveWidth(5)
    },
})