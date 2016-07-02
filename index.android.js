/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

//import ToastAndroidZZ from './ToastAndroidZZ';
//const ToastAndroidZZ = require('./ToastAndroidZZ');

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules
} from 'react-native';

const ToastAndroidZZ = NativeModules.BhToast;
const FileOpener = NativeModules.FileOpener;

class TestApp20 extends Component {
    constructor (props) {
        super(props);

        this.state = {msg: '..'}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
                <TouchableOpacity onPress={() => {
                    ToastAndroidZZ.show('Awesome', 1000, msg => alert(msg));
                }}>
                    <Text>show toast</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    ToastAndroidZZ.measureLayout(12, 13).then(() => {
                        alert('success!!')
                    },() => {
                        alert('error!!')
                    });
                }}>
                    <Text>show promise</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    FileOpener.measureLayout(12, 13).then((msg) => {
                        alert(msg)
                    },() => {
                        alert('error!!')
                    });
                }}>
                    <Text>show hh promise</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    
                    FileOpener.open("/sdcard/aaaa.pdf", "application/pdf").then((msg) => {
                        this.setState({
                            msg
                        })
                    },(e) => {
                        alert(e)
                    });
                }}>
                    <Text>file open {this.state.msg}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('TestApp20', () => TestApp20);
