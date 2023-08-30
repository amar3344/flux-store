import { Component, ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize as rf, responsiveHeight as rh } from "react-native-responsive-dimensions"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export class HomeHeader extends Component {
    render() {
        return (
            <View style={styles.homeHeaderStyle}>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={
                        styles.drawerIconStyle}
                        name="sort-reverse-variant" size={rf(3)} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Fluxstore</Text>
                <SimpleLineIcons name="bell"  style={
                        styles.drawerIconStyle} size={rf(3)} />
            </View>
        )
    }
}

export class DiscoverHeader extends Component{
    render(){
        return(
            <View style={styles.homeHeaderStyle}>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={
                        styles.drawerIconStyle}
                        name="sort-reverse-variant" size={rf(3)} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Discover</Text>
                <SimpleLineIcons name="bell"  style={
                        styles.drawerIconStyle} size={rf(3)} />
            </View>
        )
    }
}



const styles = StyleSheet.create({

    headerText:{
        fontSize:rf(3),
        fontWeight:'600',
        fontFamily:'Product Sans',
        color:'#000',

    },
    homeHeaderStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignitems:'center',
        marginTop:rh(2)
    },
    drawerIconStyle: {
        color: "#000"
    },
})