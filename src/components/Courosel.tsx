import { Image, Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Courosel1 from '../screens/courosel/Courosel1';
import Courosel2 from '../screens/courosel/Courosel2';
import Courosel3 from '../screens/courosel/Courosel3';

interface IProps{

}

interface IState{
    screen:number,
}

let intervalID:any = null;
export class Courosel extends Component<IProps,IState> {
    state:IState = {screen:1}

    componentDidMount(): void {
        intervalID = setInterval(()=>{
            this.updateScreens()
        },3000)
    }

    updateScreens=()=>{
        const {screen} = this.state 
        if(screen === 4){
            this.setState({screen:1})
        }else{
            this.setState({screen:screen+1})
        }
    }
    render() {
        const {screen} = this.state
        // console.log(screen)
        return (
            (screen === 1 )? (<Courosel1 intervalId={intervalID} props = {this.props}/>):((screen === 2 ) ? (<Courosel2 intervalId={intervalID} props = {this.props}/>) : (<Courosel3 intervalId={intervalID} props = {this.props}/>))
        )
    }
}

export default Courosel