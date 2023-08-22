import { FlatList, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import React, { Component } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import auth from '@react-native-firebase/auth';

interface IProps {
    navigation?: {
        navigate: (ara: string) => void
    }
}
interface IState {
    name: string,
    email: string,
    password: string,
    confirmPassword: string

}

const inputsData = [
    {
        id: 1,
        placeholder: 'Enter your name',
    },
    {
        id: 2,
        placeholder: 'Email address',
    },
    {
        id: 3,
        placeholder: 'Password',
    },
    {
        id: 4,
        placeholder: 'Confirm password',
    },
]

export class SignUpScreen extends Component<IProps, IState> {
    state: IState = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    handleLoginPage = () => {
        this.props.navigation?.navigate('loginScreen')
    }

    createAccount = () => {
        auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.navigation?.navigate('loginScreen')
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

 
    

    getTextByInput = (text: string, index: number) => {
        console.log(text,index)
        switch (index) {
            case 1:
                this.setState({ name: text })
                break;
            case 2:
                this.setState({ email: text })
                break;
            case 3:
                this.setState({ password: text })
                break;
            default:
                this.setState({ confirmPassword: text })
        }
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.signUpstyles}>
                    <Text style={styles.headerText}>
                        Create your account
                    </Text>
                    <FlatList
                        data={inputsData}
                        renderItem={({ item }) => (
                            <View style={styles.inputStyles}>
                                <TextInput testID={`input${item.id}`}
                                    onChangeText={(text) => this.getTextByInput(text, item.id)}
                                    style={styles.inputTextStyles} 
                                    placeholder={item.placeholder} 
                                    placeholderTextColor='rgba(0, 0, 0, 1)' />
                            </View>
                        )}
                    />
                    <View style={{ alignItems: 'center', gap: responsiveHeight(3) }}>
                        <TouchableOpacity style={styles.btnContainer} onPress={this.createAccount}>
                            <Text style={styles.btnText}>SIGN UP</Text>
                        </TouchableOpacity>
                        <Text style={styles.orSignupText}>or sign up with</Text>
                        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10 }}>
                            <View style={styles.socialCont}>
                                <Image style={styles.imageStyles} source={{ uri: ('https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png') }} />
                            </View>
                            <View style={styles.socialCont}>
                                <Image style={[styles.imageStyles]} source={{ uri: 'https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png' }} />
                            </View>
                            <View style={styles.socialCont}>
                                <EvilIcons name="sc-facebook" color="blue" size={40} />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.footerText}>Already have account? <TouchableOpacity testID='loginBtn' onPress={this.handleLoginPage}>
                        <Text style={styles.loginStyles}>Log In</Text>
                    </TouchableOpacity></Text>
                </View>
                {/* </View> */}
            </SafeAreaView>
        )
    }
}

export default SignUpScreen

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