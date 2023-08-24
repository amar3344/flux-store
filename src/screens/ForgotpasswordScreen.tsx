import { SafeAreaView, Text, TextInput, TouchableOpacity, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface IProps{
    navigation?:{
        navigate:(arg:string)=>void
        goBack:()=>void
    },
}

interface IState{

}

export class ForgotpasswordScreen extends Component<IProps,IState> {
    render() {
        return (
            <SafeAreaView>
                <View style={styles.forgotPasswordStyles}>
                    <TouchableOpacity testID='backBtn' onPress={()=>this.props.navigation?.goBack()} style={styles.goBackBtnContainer}>
                        <EvilIcons name="chevron-left" size={30} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Forgot Password?</Text>
                    <Text style={styles.tagline}>Enter email associated with your account and we'll send and email with intructions to reset your password</Text>
                    <View style={styles.inputStyles}>
                        <AntDesign name="mail" size={20} color={'rgba(191, 191, 191, 1)'}/>
                        <TextInput style={styles.inputTextStyles} placeholder='enter your email here'
                            placeholderTextColor='rgba(2, 2, 2, 1)' />
                    </View>
                    <TouchableOpacity testID='comfirmBtn' onPress={()=>this.props.navigation?.navigate('verificationScreen')} style={styles.btnContainer}>
                        <Text style={styles.btnText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default ForgotpasswordScreen

const styles = StyleSheet.create({

    btnText: {
        color: '#fff',
        paddingHorizontal: responsiveWidth(10),
        paddingVertical: responsiveHeight(2),
        fontSize: responsiveFontSize(2.5),
        fontWeight: '500',

    },

    btnContainer: {
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 100,
    },


    goBackBtnContainer:{
        backgroundColor:'#fff',
        width:responsiveHeight(4),
        height:responsiveHeight(4),
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        elvation:1,
        shadowColor:'#000',
        shadowOpacity:0.9,
        shadowOffset:{width:1,height:1},
        // borderWidth:1,
        // borderColor:'red'
        
    },

    headerText: {
        fontSize: responsiveFontSize(4),
        fontFamily: 'Product san',
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 1)',
        // width: responsiveFontSize(30),
        // marginTop:responsiveHeight(2)
    },

    tagline:{
        fontSize:responsiveFontSize(2),
        // fontWeight:'100',
        fontFamily:'Product Sans Light',
        color:'rgba(0, 0, 0, 1)'
    },
    inputStyles: {
        borderBottomWidth: 1,
        borderColor: 'rgba(214, 214, 214, 1)',
        marginVertical: responsiveHeight(2),
        flexDirection:'row',
        alignItems:'center',

    },

    inputTextStyles: {
        fontSize: responsiveFontSize(2),
        fontWeight: '300',
        fontFamily: 'Product Sans Light',
        padding: responsiveHeight(1),
        color:'rgba(2, 2, 2, 1)'
    },

    forgotPasswordStyles: {
        gap: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(10),
        paddingVertical:responsiveHeight(5)
    },
})