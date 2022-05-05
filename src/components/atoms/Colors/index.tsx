import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Appearance } from "react-native";
import { ColorSchemeName } from "react-native";

export namespace ColorsType {
    export const light = {
        primary: {
            one: '#E8F7FF',
            two: '#5EB1FF',
            three: '#0085FF',
            four: '',
            five: ''
        },
        danger: {
            one: '',
            two: '',
            three: '',
            four: '',
            five: ''
        },
        success: {
            one: '',
            two: '',
            three: '',
            four: '',
            five: ''
        },
        warning: {
            one: '',
            two: '',
            three: '',
            four: '',
            five: ''
        },
        neutral: {
            one: '#ffffff',
            two: '#eeeeee',
            three: '#888888',
            four: '#222222',
            five: '#000000'
        },
        contra:{
            one: '#ffffff',
            five:'#000000'
        }
    };
    export const dark = {
        primary: {
            one: '#E8F7FF',
            two: '#5EB1FF',
            three: '#0085FF',
            four: '',
            five: ''
        },
        danger: {
            one: '',
            two: '',
            three: '',
            four: '',
            five: ''
        },
        success: {
            one: '',
            two: '',
            three: '',
            four: '',
            five: ''
        },
        warning: {
            one: '',
            two: '',
            three: '',
            four: '',
            five: ''
        },
        neutral: {
            one: '#000000',
            two: '#222222',
            three: '#888888',
            four: '#eeeeee',
            five: '#ffffff'
        },
        contra:{
            one: '#ffffff',
            five:'#000000'
        }
    };
}

const Colors = () => {
    const [theme, setTheme] = useState<ColorSchemeName>(Appearance.getColorScheme());
    
    const themeChangeListener = useCallback(() => {
        setTheme(Appearance.getColorScheme());
    }, []);

    useEffect(() => {
        const addChange = Appearance.addChangeListener(themeChangeListener);
        return () => addChange.remove();
    }, [themeChangeListener]);

    return theme == "dark" ? ColorsType.dark : ColorsType.light;
}
export default Colors;