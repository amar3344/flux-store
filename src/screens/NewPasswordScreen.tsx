import { SafeAreaView, Modal, Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather'
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface IProps {
    navigation?: {
        navigate: (arg: string) => void,
        goBack: () => void
    }
}

interface IState {
    password: string,
    confirmPassword: string,
    eyeoff: boolean,
    enable: number,
}


export class NewPasswordScreen extends Component<IProps, IState> {

    state: IState = { password: "", confirmPassword: "", eyeoff: true, enable: 0 }

    getPassword = (input: string) => {
        this.setState({ password: input.trim() })
    }

    getConfirmPasswordText = (input: string) => {
        this.setState({ confirmPassword: input.trim() })
    }

    handleHomePage = () => {
        this.props.navigation?.navigate('homeScreen')
    }

    getBottomSheetPage = () => {
        this.setState({ enable: 1 })
    }

    render() {
        const { password, confirmPassword, eyeoff, enable } = this.state
        console.log(enable)
        return (
            <SafeAreaView>
                <GestureHandlerRootView style={[styles.signUpstyles,{opacity:enable !== 0 ? 0.5:1}]}>
                    <TouchableOpacity testID='backBtn' onPress={() => this.props.navigation?.goBack()} style={styles.goBackBtnContainer}>
                        <EvilIcons name="chevron-left" size={30} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Create new password
                    </Text>
                    <Text style={styles.tagline}>
                        Your new password must be different
                        from previously used password </Text>
                    <View style={styles.inputStyles}>
                        <TextInput testID='password' secureTextEntry={eyeoff} value={password} onChangeText={(input) => this.getPassword(input)} style={styles.inputTextStyles} placeholder='New password'
                            placeholderTextColor='rgba(0, 0, 0, 1)' />
                        <Feather name="eye" size={25} color={'rgba(0, 0, 0, 0.54)'} />
                    </View>
                    <View style={styles.inputStyles}>
                        <TextInput testID='confirmPassword' value={confirmPassword} onChangeText={(confirm) => this.getConfirmPasswordText(confirm)} style={styles.inputTextStyles} placeholder='Confirm Password'
                            placeholderTextColor='rgba(0, 0, 0, 1)' />
                        <Feather onPress={() => this.setState(p => ({ eyeoff: !p.eyeoff }))} name={eyeoff ? "eye-off" : "eye"} size={25} color={'rgba(0, 0, 0, 0.54)'} />
                    </View>
                   
                    <TouchableOpacity testID='confirmBtn'
                     disabled={confirmPassword === "" && password === ""} style={(confirmPassword !== "" && password !== "") ? styles.btnContainerEnable : styles.btnContainerDisable} onPress={this.getBottomSheetPage}>
                        <Text style={styles.btnText}>Confirm</Text>
                    </TouchableOpacity>
                    <BottomSheet 
                        index={enable}
                        snapPoints={["1%","45%"]}
                        // onChange={(index)=>this.handleChange(index)}
                        backgroundStyle={styles.bottomSheet}
                        >
                                <Image style={styles.successImgStyles} source={require("../assets/landingimgs/success.png")} />
                                <Text style={styles.passwordText} >Your password has been changed</Text>
                                <Text style={styles.welcomeStyles}>Welcome back! Discover now!</Text>
                            <TouchableOpacity style={[styles.btnContainerEnable,{backgroundColor: 'rgba(0, 0, 0, 1)',}]} onPress={this.handleHomePage}>
                            <Text style={styles.btnText}>Browse home</Text>
                        </TouchableOpacity>
                        </BottomSheet>
                </GestureHandlerRootView>
            </SafeAreaView>
        )
    }
}

export default NewPasswordScreen

const styles = StyleSheet.create({

    welcomeStyles:{
        color:'rgba(51, 34, 24, 1)',
        fontSize:responsiveFontSize(1.5),
        fontWeight:'400',
        fontFamily:'Product Sans Light',
        alignSelf:'center',
        marginVertical:responsiveHeight(2),

    },

    passwordText:{
        color:'rgba(51, 34, 24, 1)',
        fontSize:responsiveFontSize(2),
        fontWeight:'400',
        fontFamily:'Product Sans Medium',
        alignSelf:'center',
        marginVertical:responsiveHeight(1),
    },

    successImgStyles: {
        height: responsiveHeight(10),
        width: responsiveWidth(15),
        alignSelf:'center',
        marginTop:responsiveHeight(5),
    },

    bottomSheet: {
        borderRadius: responsiveHeight(5),
        backgroundColor:'#fff',
        // alignSelf:'center',
        // justifyContent:'center',
        // alignItems:'center',
    },


    btnText: {
        color: '#fff',
        paddingHorizontal: responsiveWidth(10),
        paddingVertical: responsiveHeight(2),
        fontSize: responsiveFontSize(2.5),
        fontWeight: '500',

    },

    btnContainerEnable: {
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 100,
    },

    btnContainerDisable: {
        alignSelf: 'center',
        backgroundColor: 'rgba(185, 185, 185, 1)',
        borderRadius: 100,
    },

    loginStyles: {
        textDecorationLine: 'underline',
        marginLeft: 10,
    },

    confirmBtnContainer: {
        width: responsiveWidth(10),
        height: responsiveHeight(5)
    },

    tagline: {
        fontSize: responsiveFontSize(2),
        fontWeight: '300',
        fontFamily: 'Product Sans Light',
        color: 'rgba(0, 0, 0, 1)',
    },

    goBackBtnContainer: {
        backgroundColor: '#fff',
        width: responsiveHeight(4),
        height: responsiveHeight(4),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elvation: 1,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowOffset: { width: 1, height: 1 },
        // borderWidth:1,
        // borderColor:'red'
    },

    headerText: {
        fontSize: responsiveFontSize(5),
        fontFamily: 'Product san ',
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 1)',
        width: responsiveFontSize(30),
        // marginTop:responsiveHeight(2)
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
        marginVertical: responsiveHeight(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    signUpstyles: {
        gap: responsiveHeight(5),
        padding: responsiveWidth(5),
        height:responsiveHeight(100)
    },

})