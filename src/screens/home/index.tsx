import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import create = StyleSheet.create;

const HomeScreen = () => {
    return (
        <>
            <View style={styles.main}>
                <Text>Bienvenido Test IOS</Text>
            </View>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    main:{
        backgroundColor: 'black',
        height: '100%',
    },
    title: {
    }
})
