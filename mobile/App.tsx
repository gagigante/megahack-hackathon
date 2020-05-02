import React, {useState} from 'react';

import {AppLoading} from 'expo';
import * as Font from "expo-font";
import Routes from "./src/routes";

const fetchFonts = () => {
    return Font.loadAsync({
        'Codec': require('./assets/fonts/Codec.ttf'),
    });
};

export default function App() {
    const [fontData, setFontData] = useState(false);

    if (!fontData) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontData(true)}
            />
        );
    } else {
        return (
            <Routes/>
        );
    }
}