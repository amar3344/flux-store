import { Image, Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

interface IProps{
    props:{
        navigation?:{
            navigate:(arg:string)=>void
        }
    },
    intervalId:any
}
interface IState{

}

export class Courosel1 extends Component<IProps,IState> {

    handleAccountScreen = ()=>{
        clearInterval(this.props.intervalId)
        this.props.props.navigation?.navigate('createScreen')
    }
  render() {
    return(
        <SafeAreaView>
        <View style={styles.whiteBackground}>
                <Text style={styles.discoverText}>Discover something new</Text>
                <Text style={styles.tagline}>Special new arrivals just for you</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyles} source={require('../../assets/landingimgs/couroselImg1.png')} />
            </View>
            <View style={styles.remaingImages}/>

            <View style={styles.greyBackground}>
                <View style={styles.dotContainer}>
                    <View style={styles.dots} />
                    <View style={styles.dotBackground}/>
                    <View style={styles.dotBackground}/>
                </View>
                <TouchableOpacity testID='shoppingBtn1' onPress={this.handleAccountScreen} style={styles.btnContainer}>
                    <Text style={styles.btnText}>Shopping now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  }
}

export default Courosel1

const styles = StyleSheet.create({

    remaingImages:{
        height:responsiveHeight(40),
        width:responsiveWidth(5),
        borderRadius:5,
        backgroundColor: '#E7E8E9',
        alignSelf:'flex-end',
        position:'absolute',
        top:responsiveHeight(30),
        overflow:'hidden',
    },
    dotContainer:{
       marginTop:responsiveHeight(20),
       marginBottom:responsiveHeight(5),
       flexDirection:'row',
       alignItems:'center',
    },

    dotBackground:{
        borderColor:'#fff',
        borderWidth:responsiveFontSize(0.1),
        backgroundColor: 'transparent',
        width: responsiveWidth(2),
        height: responsiveHeight(1),
        borderRadius: responsiveWidth(50),
       marginRight:responsiveWidth(2)
    },

    tagline: {
        color: '#000',
        fontFamily: 'Product Sans',
        fontWeight: '400',
        fontSize: responsiveFontSize(2),
        marginVertical: responsiveHeight(2)
    },

    discoverText: {
        color: '#000',
        fontFamily: 'Product Sans',
        fontWeight: '500',
        fontSize: responsiveFontSize(3),
        marginTop: responsiveHeight(2)
    },

    btnText: {
        color: '#fff',
        paddingHorizontal: responsiveWidth(10),
        paddingVertical: responsiveHeight(2),
        fontSize: responsiveFontSize(3),
        fontFamily: 'Product Sansa'
    },

    imageStyles: {
        alignSelf: 'center',
    },


    imageContainer: {
        backgroundColor: '#E7E8E9',
        width: responsiveWidth(65),
        alignSelf: 'center',
        paddingTop: responsiveHeight(5),
        position: 'absolute',
        top: responsiveHeight(15),
        zIndex: 1,
        borderRadius: responsiveFontSize(2),
    },

    greyBackground: {
        backgroundColor: '#464447',
        top: responsiveHeight(60),
        height:responsiveHeight(40),
        width: responsiveWidth(100),
        alignItems: 'center',
        zIndex: -1,
        position: 'absolute',

    },

    whiteBackground: {
        backgroundColor: "#fff",
        height: responsiveHeight(60),
        width: responsiveWidth(100),
        alignItems: 'center',

    },

    btnContainer: {
        borderColor: '#fff',
        borderWidth: responsiveWidth(0.5),
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 100
    },

    dots: {
        backgroundColor: '#fff',
        width: responsiveWidth(2),
        height: responsiveHeight(1),
        borderRadius: responsiveWidth(50),
       marginRight:responsiveWidth(2)
    },
})