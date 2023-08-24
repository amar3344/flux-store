import { FlatList, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth, } from 'react-native-responsive-dimensions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather'

interface IProps {
    navigation?:{
        navigate:(arg:string)=>void,
        goBack:()=>void
    }
}

interface IState {
    password: string,
    confirmPassword: string,
    eyeoff: boolean,
}


export class NewPasswordScreen extends Component<IProps, IState> {

    state: IState = { password: "", confirmPassword: "", eyeoff: true }

    getPassword = (input: string) => {
        this.setState({ password: input.trim() })
    }

    getConfirmPasswordText = (input: string) => {
        this.setState({ confirmPassword: input.trim() })
    }

    handleHomePage=()=>{
        this.props.navigation?.navigate('homeScreen')
    }

    render() {
        const { password, confirmPassword, eyeoff } = this.state
        return (
            <SafeAreaView>
                <View style={styles.signUpstyles}>
                    <TouchableOpacity testID='backBtn' onPress={()=>this.props.navigation?.goBack()} style={styles.goBackBtnContainer}>
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
                    <TouchableOpacity testID='confirmBtn' disabled={confirmPassword === "" && password === ""} style={(confirmPassword !== "" && password !== "") ? styles.btnContainerEnable : styles.btnContainerDisable} onPress={this.handleHomePage}>
                        <Text style={styles.btnText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default NewPasswordScreen

const styles = StyleSheet.create({


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
        padding: responsiveWidth(5)
    },

})