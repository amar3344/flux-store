import { FlatList, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

interface IProps {

}
interface IState {
    isLoginPage: boolean
}

const inputsData = [
    {
        id: 1,
        placeholder: 'Enter your name',
    },
    {
        id: 2,
        placeholder: 'Enter address',
    },
    {
        id: 3,
        placeholder: 'Password',
    },
    {
        id: 4,
        placeholder: 'confirm password',
    },
]

export class SignUpScreen extends Component<IProps, IState> {
    state: IState = { isLoginPage: false }

    handleLoginPage = () => {
        // this.setState({ isLoginPage: true })
        this.setState(p=>({isLoginPage : !p.isLoginPage}))
    }
    render() {
        const { isLoginPage } = this.state
        return (
            <SafeAreaView>
                <View style={styles.signUpstyles}>
                    {isLoginPage ? (<>
                            <Text style={styles.headerText}>
                                Log into your account
                            </Text>
                            <View style={styles.inputStyles}>
                                <TextInput style={styles.inputTextStyles} placeholder='Email address'
                                    placeholderTextColor='rgba(0, 0, 0, 1)' />
                            </View>
                            <View style={styles.inputStyles}>
                                <TextInput style={styles.inputTextStyles} placeholder='Pasword'
                                    placeholderTextColor='rgba(0, 0, 0, 1)' />
                            </View>
                            <Text style={[styles.inputTextStyles, { alignSelf: 'flex-end' }]} >Forgot Password?</Text>
                        </>
                        ) : (<>
                            <Text style={styles.headerText}>
                                Create your account
                            </Text>
                            <FlatList
                                data={inputsData}
                                renderItem={({ item }) => (
                                    <View style={styles.inputStyles}>
                                        <TextInput style={styles.inputTextStyles} placeholder={item.placeholder} placeholderTextColor='rgba(0, 0, 0, 1)' />
                                    </View>
                                )}
                            />
                        </>
                )}
                        <View style={{ alignItems: 'center', gap: responsiveHeight(3) }}>
                            <TouchableOpacity style={styles.btnContainer}>
                                <Text style={styles.btnText}>{isLoginPage ? "Log In" : "SIGN UP"}</Text>
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
                        <Text style={styles.footerText}>Already have account? <TouchableOpacity onPress={this.handleLoginPage}>
                            <Text style={styles.loginStyles}>{isLoginPage ? 'Sign Up' : 'Log In'}</Text>
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