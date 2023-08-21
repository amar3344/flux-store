import { StyleSheet, ImageBackground, SafeAreaView, StatusBar, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

export class LandingPage extends Component {
  render() {
    return (
     <SafeAreaView>
        <View>
            <ImageBackground style={styles.imgBackgroundStyles} source={require('../assets/landingimgs/startedimg.png')}>
                <View style={styles.contentStyles}>
                    <Text style={styles.welcomeText}>Welcome to Fluxstore!</Text>
                    <Text style={styles.tagline}>The home for a fashionista</Text>
                <TouchableOpacity style={styles.buttonCont}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
     </SafeAreaView>
    )
  }
}

export default LandingPage

const styles = StyleSheet.create({

    buttonText:{
        color:'#fff',
        fontSize:responsiveFontSize(2.5),
        fontWeight:'600',
        fontFamily:'Product Sans',
    },

    buttonCont:{
        paddingVertical:responsiveWidth(3),
        paddingHorizontal:responsiveWidth(10),
        borderColor:'#fff',
        borderWidth:responsiveHeight(0.2),
        borderRadius:responsiveWidth(50),
        marginTop:responsiveHeight(5),
        backgroundColor: 'rgba(225,225,225,0.7)',
        filter: 'blur(10)',
        // -webkit-filter: blur(8px),

        // blurradius:responsiveFontSize(12)
    //    backfaceVisibility:blur
        // filter: blur(8),
    },

    welcomeText:{
        color:'#fff',
        fontSize:responsiveFontSize(2.5),
        fontWeight:'800',
        fontFamily:'Product Sans',
    },

    tagline:{
        color:'#fff',
        fontSize:responsiveFontSize(2),
        fontWeight:'600',
        fontFamily:'Product Sans',
    },

    contentStyles:{
        position:'relative',
        top:responsiveFontSize(60),
        flexDirection:'column',
        justifyContent:"flex-end",
        alignItems:'center',
        gap:responsiveHeight(1),
    },

    imgBackgroundStyles:{
        height:responsiveFontSize(100),
        width:responsiveWidth(100),
        
    },
    
})

function blur(arg0: number): any {
    throw new Error('Function not implemented.');
}
