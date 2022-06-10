import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
const LoadingScreen = () => {
    return (
        <View style={LoadingScreenStyles.backgroundCenter}>
            <Image
                style={LoadingScreenStyles.ecoIcon}
                source={require('../../../assets/ecopark-icon.png')} />
                <View style={{flex:0.05}}></View>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
}

const LoadingScreenStyles = StyleSheet.create({
    backgroundCenter: {
        flexDirection: "column",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    ecoIcon: {
        width: 200,
        height: "auto",
        aspectRatio: 1.5,
        resizeMode: "contain",
    }
});

export default LoadingScreen;