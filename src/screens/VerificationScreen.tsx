import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface IProps{
  navigation?:{
      navigate:(arg:string)=>void,
      goBack:()=>void
  }
}

interface IState{

}

export class VerificationScreen extends Component<IProps,IState> {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.forgotPasswordStyles}>
          <TouchableOpacity testID='backBtn' onPress={()=>this.props.navigation?.goBack()} style={styles.goBackBtnContainer}>
            <EvilIcons name="chevron-left" size={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Verification Code</Text>
          <Text style={styles.tagline}>
          Please enter the verification code we sent to your email address
          </Text>
          <View style={styles.container}>
            <View style={styles.otpsCont}></View>
            <View style={styles.otpsCont}></View>
            <View style={styles.otpsCont}></View>
            <View style={styles.otpsCont}></View>
          </View>
        <Text style={styles.footerText}>Resend in 00:10</Text>
        <TouchableOpacity testID='confirmBtn' onPress={()=>this.props.navigation?.navigate('verificationScreen')} style={styles.btnContainer}>
              <Text style={styles.btnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default VerificationScreen;

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


    footerText:{
        color:'rgba(18, 20, 32, 0.5)',
        fontFamily:'Product Sans Light',
        fontWeight:'500',
        fontSize:responsiveFontSize(2)
    },

    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    otpsCont:{
        width:responsiveHeight(5),
        height:responsiveHeight(5),
        borderRadius:50,
        borderWidth:1,
        borderColor:'rgba(165, 167, 172, 1)',
        margin:responsiveFontSize(0.5)
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
    shadowOffset: {width: 1, height: 1},
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

  tagline: {
    fontSize: responsiveFontSize(2),
    // fontWeight:'100',
    fontFamily: 'Product Sans Light',
    color: 'rgba(0, 0, 0, 1)',
  },




  forgotPasswordStyles: {
    gap: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveHeight(5),
  },
});
