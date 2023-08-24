import { Text, View, StyleSheet, Platform, SafeAreaView, Image, ImageBackground, FlatList, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf, responsiveFontSize } from 'react-native-responsive-dimensions'
import { HomeHeader } from '../components/common/HeaderSections'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { featurePriducts } from '../components/common/FeatureProducrs'

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.homeScreenStyles}>
        <View style={styles.topContainer}>
          <HomeHeader />
          <View style={styles.topTabnavigation}>
            <View style={styles.eachTabStyles}>
              <View style={styles.activeBackground}>
                <AntDesign name='woman' size={20} color={'#fff'} />
              </View>
            </View>
            <View style={[styles.eachTabStyles, { borderColor: 'rgba(243, 243, 243, 1)', borderWidth: 0 }]}>
              <View style={styles.inActiveBackground}>
                <AntDesign name='man' size={20} color={'rgba(157, 157, 157, 1)'} />
              </View>
            </View>
            <View style={[styles.eachTabStyles, { borderColor: 'rgba(243, 243, 243, 1)', borderWidth: 0 }]}>
              <View style={styles.inActiveBackground}>
                <FontAwesome5 name='glasses' size={20} color={'rgba(157, 157, 157, 1)'} />
              </View>
            </View>
            <View style={[styles.eachTabStyles, { borderColor: 'rgba(243, 243, 243, 1)', borderWidth: 0 }]}>
              <View style={styles.inActiveBackground}>
                <Image source={require('../assets/homepageimg/shover.png')} />
              </View>
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topContainer}>
            <ImageBackground resizeMode='stretch' style={styles.imageContainer} source={require('../assets/homepageimg/automCollection.png')}>
              <Text style={styles.headingText}>
                Autumn Collection 2022
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.featureproductsandshowall}>
            <Text style={styles.featureProductsText}>Feature Products</Text>
            <Text style={styles.showAllText}>Show all</Text>
          </View>
          <View>
            <FlatList horizontal showsHorizontalScrollIndicator={false}
              data={featurePriducts}
              renderItem={({ item }) => (
                <View style={styles.productsContainer}>
                  <Image style={styles.productImageStyles} source={item.image} />
                  <Text style={styles.titleText}>{item.titel}</Text>
                  <Text>RS {item.price}</Text>
                </View>
              )}
            />
          </View>
          <View style={styles.collectionLayout}>
            <View style={styles.textContainer}>
              <Text style={styles.textheading}>NEW COLLECTION</Text>
              <Text style={styles.tagline}>HANG OUT & PARTY</Text>
            </View>
            <View style={styles.outerContainer}>
              <View style={styles.innerContainer}>
                <Image style={styles.lableImageStyles} source={require('../assets/homepageimg/labelImg.png')} />
              </View>
            </View>
          </View>
          <View style={styles.featureproductsandshowall}>
            <Text style={styles.featureProductsText}>Recommended</Text>
            <Text style={styles.showAllText}>Show all</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.recommendedContainer}>
              <Image resizeMode='contain' style={styles.whiteHoodieImgStyles} source={require('../assets/homepageimg/whiteHoodie.png')} />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.hoodieText}>
                  White fashion hoodie
                </Text>
                <Text style={styles.hoodiePrice}>Rs 29.00</Text>
              </View>
            </View>
            <View style={styles.recommendedContainer}>
              <Image resizeMode='contain' style={styles.whiteHoodieImgStyles} source={require('../assets/homepageimg/whiteHoodie.png')} />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.hoodieText}>
                  White fashion hoodie
                </Text>
                <Text style={styles.hoodiePrice}>Rs 29.00</Text>
              </View>
            </View>
          </View>
          <View style={styles.featureproductsandshowall}>
            <Text style={styles.featureProductsText}>Top Collection</Text>
            <Text style={styles.showAllText}>Show all</Text>
          </View>
          <View style={styles.slimandbeautyStyles}>
            <View style={styles.textContainer}>
              <Text style={styles.textheading}>Sale up to 40%</Text>
              <Text style={styles.tagline}>FOR SLIM & BEAUTY</Text>
            </View>
            <View style={styles.yellowDressbackground}>
              <Image style={styles.lableImageStyles} source={require('../assets/homepageimg/yellowdress.png')} />
            </View>
          </View>
          <View style={styles.slimandbeautyStyles}>
            <View style={styles.textContainer}>
              <Text style={styles.textheading}>Summer Collection 2021</Text>
              <Text style={styles.tagline}>MOST sexy & fabulous design</Text>
            </View>
            <View style={styles.yellowDressbackground}>
              <Image style={styles.lableImageStyles} source={require('../assets/homepageimg/brownDress.png')} />
            </View>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.container1}>
              <Image style={{marginRight:-30}} source={require('../assets/homepageimg/footerImg1.png')}/>
              <View style={{width:'40%',margin:10}}>
                <Text style={styles.tShirtsStyles}>T-Shirts</Text>
                <Text style={styles.officeText}>The office Life</Text>
              </View>
            </View>
            <View style={styles.container2}>
              <View style={{width:'45%',margin:10}}>
                <Text style={styles.tShirtsStyles}>Dress</Text>
                <Text style={styles.officeText}>Elegant Design</Text>
              </View>
              <Image source={require('../assets/homepageimg/footerImg2.png')}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView >
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({

  officeText:{
    color:'rgba(29, 31, 34, 1)',
    fontSize: rf(3),
    fontWeight: '200',
    fontFamily: 'Product Sans Light',
    marginTop:rh(2)
  },

  tShirtsStyles:{
    color:'rgba(115, 118, 128, 1)',
    fontSize: rf(2),
    fontWeight: '400',
    fontFamily: 'Roboto',
  },

  container2:{
    backgroundColor:"rgba(248, 248, 250, 1)",
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    marginLeft:rw(4),
    // borderWidth:1,
    width:rw(43)
  },

  

  container1:{
    backgroundColor:"rgba(248, 248, 250, 1)",
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10,
    // borderWidth:1,
    width:rw(43)
    // width:rw(40)
  },

  footerContainer:{
    marginHorizontal:rw(5),
    marginVertical:rw(5),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },

  yellowDressbackground: {
    backgroundColor: 'rgba(236, 236, 236, 1)',
    height: rh(20),
    width: rh(20),
    borderRadius: rh(13),
    alignItems: 'center',
    justifyContent: 'center',
  },

  slimandbeautyStyles: {
    flexDirection: 'row',
    marginHorizontal: rw(5),
    marginVertical: rh(2),
    backgroundColor: 'rgba(248, 248, 250, 1)',
    alignItems: 'center',
    height: rh(25),
    borderRadius: rh(1.5),
    paddingHorizontal: rw(5),
    paddingVertical: rh(2),
    justifyContent: 'space-between',
  },

  hoodiePrice: {
    color: 'rgba(29, 31, 34, 1)',
    fontSize: rf(2.5),
    fontWeight: '500',
    fontFamily: 'Product Sans Medium',
    marginTop: 10,
  },

  hoodieText: {
    color: 'rgba(29, 31, 34, 1)',
    fontSize: rf(1.8),
    fontWeight: '300',
    fontFamily: 'Product Sans Medium',

  },

  whiteHoodieImgStyles: {
    width: '38%',
    height: '100%',
  },

  recommendedContainer: {
    elevation: 5,
    backgroundColor: 'rgba(249, 249, 249, 1)',
    width: rw(65),
    height: rh(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: rw(5)
    // paddingRight:rw(0.5)
  },

  tagline: {
    color: 'rgba(53, 57, 69, 1))',
    fontSize: rf(2.2),
    fontWeight: '300',
    fontFamily: 'Product Sans Light',
    marginTop: rh(2)
  },

  textheading: {
    color: 'rgba(119, 126, 144, 1)',
    fontSize: rf(1.8),
    fontWeight: '300',
    fontFamily: 'Product Sans Light',
  },

  textContainer: {
    width: "40%",
  },

  lableImageStyles: {
    height: rh(25),
    width: rw(25)
  },

  innerContainer: {
    backgroundColor: 'rgba(226, 226, 226, 1)',
    // backgroundColor:'green',
    height: '100%',
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },

  outerContainer: {
    backgroundColor: 'rgba(226, 226, 226, 0.5)',
    // backgroundColor:'red',
    height: rh(25),
    width: rh(25),
    borderRadius: rh(13),
    padding: 18,
  },

  collectionLayout: {
    backgroundColor: 'rgba(248, 248, 250, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    height: rh(25),
    paddingLeft: rw(15)

  },

  titleText: {
    color: 'rgba(29, 31, 34, 1)',
    fontSize: rf(2),
    fontFamily: 'Product Sans Medium',
    fontWeight: '400',

  },

  productImageStyles: {
    overflow: 'hidden',
    borderRadius: 10,
    height: rh(35),
    width: rw(40),
    marginVertical: rh(1)
  },

  productsContainer: {
    marginHorizontal: rw(4),
    marginVertical: rh(2),
  },

  showAllText: {
    color: 'rgba(155, 155, 155, 1)',
    fontSize: rf(1.8),
    fontFamily: 'Product Sans',
    fontWeight: '500',
  },

  featureProductsText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: rf(2.5),
    fontFamily: 'Product Sans',
    fontWeight: '500',
  },

  featureproductsandshowall: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: rw(5),
    marginVertical: rh(2)
  },

  headingText: {
    fontFamily: 'Product Sans',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: rf(3),
    fontWeight: '700',
    // textAlign:'left',
    alignSelf: 'flex-end',
    width: rw(40),
    marginTop: rh(3),
    letterSpacing:rw(0.2)
  },

  imageStyles: {
    width: '100%',
    height: '100%',
  },

  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    height: rh(25),
    borderRadius: 20
  },

  inActiveBackground: {
    backgroundColor: 'rgba(243, 243, 243, 1)',
    height: '100%',
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topTabnavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: rh(1)
  },

  activeBackground: {
    backgroundColor: 'rgba(58, 44, 39, 1)',
    height: '100%',
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreenStyles: {
    marginTop: Platform.OS === 'android' ? 0 : 0,
    backgroundColor: '#fff',
    flex: 1,
  },

  topContainer: {
    marginHorizontal: rw(5),
    gap: rh(2)
  },

  eachTabStyles: {
    borderWidth: 1,
    borderColor: 'rgba(58, 44, 39, 1)',
    height: rh(7),
    width: rh(7),
    borderRadius: 50,
    padding: 2
  },

})