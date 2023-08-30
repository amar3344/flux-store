import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {DiscoverHeader} from '../components/common/HeaderSections';
import {
  responsiveWidth as rw,
  responsiveFontSize as rf,
  responsiveHeight as rh,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {clothsData, discoverImages} from '../components/common/DiscoverData';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IProps {
  navigation?:{
    navigate:(arg:string)=>void
  }
}

interface IState {
  isDisplay: boolean;
}

export class SearchScreen extends Component<IProps, IState> {
  state: IState = {isDisplay: false};

  handleToggle = (id: number) =>
    this.setState(p => ({isDisplay: !p.isDisplay}))

  render() {
    const {isDisplay} = this.state;
    return (
      <SafeAreaView style={styles.discoverScreen}>
        <View
          style={{marginHorizontal: rw(5), gap: rh(2), paddingBottom: rh(10)}}>
          <DiscoverHeader />
          <TouchableOpacity testID='drawerBtn' style={styles.searchandFilter} onPress={()=>this.props.navigation?.navigate('drawerScreen')}>
            <View style={styles.searchContainer}>
              <Feather
                style={{marginHorizontal: rw(2)}}
                name="search"
                size={rh(3.5)}
                color={'rgba(190, 191, 196, 1)'}
              />
              <Text style={styles.inputStyles}>Search</Text>
            </View>
            <TouchableOpacity style={styles.filterContainer} onPress={()=>this.props.navigation?.navigate('drawerScreen')}>
              <FontAwesome6
                name="sliders"
                size={rh(3)}
                color={'rgba(190, 191, 196, 1)'}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={discoverImages}
            renderItem={({item}) => (
              <>
                <TouchableOpacity
                  onPress={() => this.handleToggle(item.id)}
                  style={[
                    styles.collectionLayout,
                    {backgroundColor: item.colorBackground},
                  ]}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <View
                    style={[
                      styles.outerContainer,
                      {backgroundColor: item.outerBackground},
                    ]}>
                    <View
                      style={[
                        styles.innerContainer,
                        {backgroundColor: item.innerBackground},
                      ]}>
                      <Image
                        style={[
                          styles.lableImageStyles,
                          {width: item.id === 2 ? rw(35) : rw(30)},
                        ]}
                        source={item.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                {isDisplay && (
                  <FlatList
                    data={clothsData}
                    renderItem={({item}) => (
                      <View style={item.id === 4 || item.id === 5 ? (styles.eachitemMarginLeft) :(styles.eachitem)}>
                        <Text style={item.id === 4 || item.id === 5 ?([styles.listTitleText,{fontSize:rf(2.5)}]):(styles.listTitleText) }>{item.title}</Text>
                        <View
                          style={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: 'row',
                          }}>
                          <Text style={styles.itemsText}>{item.items}</Text>
                          <AntDesign name="right" size={20} color="#000" />
                        </View>
                      </View>
                    )}
                  />
                )}
              </>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default SearchScreen;

const styles = StyleSheet.create({

  eachitemMarginLeft:{
    marginLeft:rw(8),
    borderBottomWidth: 1,
    borderColor: 'rgba(241, 242, 244, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rh(10),
    paddingHorizontal: rw(5),
  },
  itemsText: {
    color: 'rgba(163, 165, 173, 1)',
    fontWeight: '300',
    fontSize: rf(1.8),
    fontFamily: 'Product Sans Light',
    letterSpacing: rw(0.1),
    marginRight: rw(1),
  },

  listTitleText: {
    color: 'rgba(0,0,0,1)',
    fontWeight: '200',
    fontSize: rf(3),
    fontFamily: 'Product Sans Light',
    letterSpacing: rw(0.1),
  },

  eachitem: {
    borderBottomWidth: 1,
    borderColor: 'rgba(241, 242, 244, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rh(10),
    paddingHorizontal: rw(5),
  },

  titleText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: rf(2),
    fontFamily: 'Product Sans',
    fontWeight: '600',
  },

  lableImageStyles: {
    height: rh(25),
    // width: rw(25)
  },

  collectionLayout: {
    backgroundColor: 'rgba(248, 248, 250, 1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rh(25),
    paddingLeft: rw(15),
    marginVertical: rh(2),
    borderRadius: rh(2),
  },

  innerContainer: {
    // backgroundColor: 'rgba(226, 226, 226, 1)',
    // backgroundColor:'green',
    height: '100%',
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  outerContainer: {
    // backgroundColor: 'rgba(226, 226, 226, 0.5)',
    // backgroundColor:'red',
    height: rh(25),
    width: rh(25),
    borderRadius: rh(13),
    padding: rh(2.5),
  },

  inputStyles: {
    fontSize: rf(3),
    fontFamily: 'Product Sans Medium',
    fontWeight: '400',
    color: 'rgba(119, 126, 144, 1)',
    marginLeft: rw(2),
  },

  searchandFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  filterContainer: {
    backgroundColor: 'rgba(250, 250, 250, 1.15)',
    elevation: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: rw(18),
    height: rh(8),
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowColor: 'rgba(119, 126, 144, 1)',
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
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowColor: 'rgba(119, 126, 144, 1)',
  },

  discoverScreen: {
    marginTop: Platform.OS === 'android' ? 0 : 0,
    backgroundColor: '#fff',
    flex: 1,
  },
});
