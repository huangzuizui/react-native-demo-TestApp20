/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    NativeModules,
    TouchableOpacity
} from 'react-native';

const CalendarManagerOC = NativeModules.CalendarManagerOC;
const CalendarManagerSwift = NativeModules.CalendarManagerSwift;
const FileOpener = NativeModules.FileOpener;
const NativeDocumentController = require('NativeModules').DocumentController;
const RNFS = require('react-native-fs');

class TestApp20 extends Component {

    readFile () {
        RNFS.readDir(RNFS.MainBundlePath)
            .then((result) => {
                console.log('GOT RESULT', result);

            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        CalendarManagerOC.addEvent('Birthday Party', '4 Privet Drive, Surrey');
                    }}>
                    <Text>for oc console</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        CalendarManagerOC.findEvents(function(err, str) {
                          alert(str);
                        })
                    }}>
                    <Text>for oc callback</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        CalendarManagerOC.newFindEvents().then((str) => {
                            alert('success!!')
                        },(str) => {
                            alert('error!!')
                        })
                    }}>
                    <Text>for oc promiss</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        CalendarManagerSwift.addEvent('Birthday Party', '4 Privet Drive, Surrey', 123123);
                    }}>
                    <Text>for swift console</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        CalendarManagerSwift.findEvent(function(err, msg) {
                            console.log(err);
                            alert(msg);
                        })
                    }}>
                    <Text>for swift callback</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        //FileOpener.open('hello', 'opener').then((str) => {
                        //    alert('success!!')
                        //},(str) => {
                        //    alert('error!!')
                        //})
                        NativeDocumentController.show({
                            file: '/var/containers/Bundle/Application/5D643951-52D7-462F-858A-120D3131602E/TestApp20.app/test.doc'
                        });
                        this.readFile();
                    }}>
                    <Text>for opener</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        //FileOpener.open('hello', 'opener').then((str) => {
                        //    alert('success!!')
                        //},(str) => {
                        //    alert('error!!')
                        //})
                        FileOpener.open(
                            '/var/containers/Bundle/Application/FF14FCFF-E03B-4810-A5F8-3395FDCCDD86/TestApp20.app/test.doc',
                            'hhh'
                        ).then((msg) => {
                            this.setState({
                                msg
                            })
                        },(e) => {
                            console.log(e)
                        });

                        // this.readFile();
                    }}>
                    <Text>for opener</Text>
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
