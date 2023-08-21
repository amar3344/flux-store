import { Image, Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export class Courosel2 extends Component {
  render() {
    return (
        <SafeAreaView>
        <View style={styles.whiteBackground}>
                <Text style={styles.discoverText}>Update trendy outfit</Text>
                <Text style={styles.tagline}>Favorite brands and hottest trends</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyles} source={require('../../assets/landingimgs/couroselImg2.png')} />
            </View>
            <View style={styles.remaingImages}/>
            <View style={[styles.remaingImages,{alignSelf:'flex-end'}]}/>
            <View style={styles.greyBackground}>
                <View style={styles.dotContainer}>
                    <View style={styles.dotBackground}/>
                    <View style={styles.dots} />
                    <View style={styles.dotBackground}/>
                </View>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>Shopping now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
  }
}

export default Courosel2

const styles = StyleSheet.create({

    remaingImages:{
        height:responsiveHeight(40),
        width:responsiveWidth(5),
        borderRadius:5,
        // borderBottomRightRadius:responsiveWidth(0.5),
        // borderTopRightRadius:responsiveWidth(0.5),
        // borderTopLeftRadius:responsiveWidth(0.5),
        // borderBottomLeftRadius:responsiveWidth(0.5),
        backgroundColor: '#E7E8E9',
        // borderWidth:1,
        // borderColor:'red',
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