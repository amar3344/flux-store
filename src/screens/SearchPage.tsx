import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, TextInput, Platform, Image } from 'react-native';
import React, { Component } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { responsiveHeight as rh, responsiveFontSize as rf, responsiveScreenWidth as rw } from 'react-native-responsive-dimensions';


interface IProps {
    navigation?: {
        navigate: (arg: string) => void;
        goBack: () => void;
    };
}

export class SearchPage extends Component<IProps> {
    render() {
        return (
            <SafeAreaView style={styles.searchPageStyles}>
                <View style={{ padding: rh(2) ,gap:rh(4)}}>
                {/* <FilterScreen/> */}
                    <TouchableOpacity
                        testID="backBtn"
                        onPress={() => this.props.navigation?.goBack()}
                        style={styles.goBackBtnContainer}>
                        <EvilIcons name="chevron-left" size={30} color="#000" />
                    </TouchableOpacity>
                    <View style={styles.searchandFilter}>
                        <View style={styles.searchContainer}>
                            <Feather
                                style={{ marginHorizontal: rw(2) }}
                                name="search"
                                size={rh(3.5)}
                                color={'rgba(190, 191, 196, 1)'}
                            />
                            <TextInput
                                style={styles.inputStyles}
                                placeholder="Search"
                                placeholderTextColor={'rgba(119, 126, 144, 1)'}
                            />
                        </View>
                        <TouchableOpacity style={styles.filterContainer} onPress={()=>this.props.navigation?.navigate('drawerScreen')}>
                            <FontAwesome6
                                name="sliders"
                                size={rh(3)}
                                color={'rgba(190, 191, 196, 1)'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recentANDdelete}>
                        <Text style={styles.recentText}>Recent Searches</Text>
                        <Feather name="trash-2" size={rh(4)} color='rgba(51, 48, 46, 0.49)'/>
                    </View>
                    <View style={styles.searchItemsContainer}>
                        <View style={styles.eachSearchItem}>
                            <Text style={styles.itemsTextStyles}>Sunglasses</Text>
                            <Text style={styles.remove}>X</Text>
                        </View>
                        <View style={styles.eachSearchItem}>
                            <Text style={styles.itemsTextStyles}>Sweater</Text>
                            <Text style={styles.remove}>X</Text>
                        </View>
                        <View style={styles.eachSearchItem}>
                            <Text style={styles.itemsTextStyles}>Hoodie</Text>
                            <Text style={styles.remove}>X</Text>
                        </View>
                    </View>
                    <View style={styles.recentANDdelete}>
                        <Text style={styles.popularText}>Popular this week</Text>
                        <Text style={styles.showAllText}>Show all</Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <View>
                            <Image style={styles.imageStyles} source={require('../assets/discoverScreenImg/whiteScut.png')}/>
                            <Text style={styles.imageText}>Lihua Tunic White</Text>
                            <Text style={styles.pricetag}>Rs 53.00</Text>
                        </View>
                        <View>
                            <Image style={styles.imageStyles} source={require('../assets/discoverScreenImg/fullskirt.png')}/>
                            <Text style={styles.imageText}>Lihua Tunic White</Text>
                            <Text style={styles.pricetag}>Rs 53.00</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default SearchPage;

const styles = StyleSheet.create({

    footerContainer:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },

    imageStyles:{
        overflow:'hidden',
        borderRadius:10,
    },

    pricetag:{
        color:'rgba(29, 31, 34, 1)',
        fontSize:rf(2.5),
        fontFamily:'Product Sans',
        fontWeight:'500',
    },

    imageText:{
       color:'rgba(29, 31, 34, 1)',
       fontSize:rf(2),
        fontFamily:'Product Sans Medium',
        fontWeight:'400',
    },

    showAllText:{
        color:'rgba(155, 155, 155, 1)',
        fontSize:rf(2.5),
        fontFamily:'Product Sans Medium',
        fontWeight:'400',
    },

    popularText:{
        color:'rgba(0,0,0,1)',
        fontSize:rf(3),
        fontFamily:'Product Sans',
        fontWeight:'500',
        letterSpacing:rf(0.1)
    },

    remove:{
        color:'rgba(204, 210, 227, 1)',
        fontSize:rf(3),
        fontWeight:'700',
        marginHorizontal:rw(5)
    },

    itemsTextStyles:{
        color:'rgba(51, 48, 46, 0.7)',
        fontSize:rf(2.5),
        fontFamily:'Nunito',
        fontWeight:'500',
    },

    searchItemsContainer:{
        flexWrap:'wrap',
        flexDirection:'row',
    },

    eachSearchItem:{
        backgroundColor:'rgba(250, 250, 250, 1)',
        borderRadius:rh(1),
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:rw(5),
        paddingVertical:rh(2),
        margin:rh(1)
    },

    recentText:{
        fontSize:rf(2.5),
        fontFamily:'Nunito',
        fontWeight:'700',
        color:'rgba(51, 48, 46, 0.49)',
    },

    recentANDdelete:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    searchPageStyles: {
        marginTop: Platform.OS === 'android' ? 0 : 0,
        backgroundColor: '#fff',
        flex: 1,
    },


    filterContainer: {
        backgroundColor: 'rgba(250, 250, 250, 1.15)',
        elevation: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: rw(18),
        height: rh(8),
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowColor: 'rgba(119, 126, 144, 1)',
    },

    inputStyles: {
        fontSize: rf(3),
        fontFamily: 'Product Sans Medium',
        fontWeight: '400',
        color: 'rgba(119, 126, 144, 1)',
        marginLeft: rw(2),
    },

    searchContainer: {
        backgroundColor: 'rgba(250, 250, 250, 1.15)',
        elevation: 5,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: rw(65),
        height: rh(8),
        // padding:rh(0.5),
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowColor: 'rgba(119, 126, 144, 1)',
    },


    searchandFilter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    goBackBtnContainer: {
        backgroundColor: '#fff',
        width: rh(4),
        height: rh(4),
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
})
