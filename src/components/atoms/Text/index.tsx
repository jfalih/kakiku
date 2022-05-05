import React, { memo } from 'react';
import { ReactNode } from "react";
import { Text as RNText, TextStyle } from "react-native"
import textStyle from "./text.style";

namespace TextTypeStyle {
    export const label = {
        fontSize:12,
    };
    export const body = {
        fontSize: 16,
    };
    export const title = {
        fontSize:18
    }
    export const subheading = {
        fontSize:22,
    }
    export const heading ={
        fontSize:36
    }
}

namespace WeightType {
    export const bold = {
        fontFamily: 'OpenSans-Bold'
    };
    export const reguler = {
        fontFamily: 'OpenSans-Regular'
    }
}

interface TextProps {
    style?: TextStyle,
    type: keyof typeof TextTypeStyle,
    weight: keyof typeof WeightType,
    textProps?: Record<string, string | number>,
    children: string
}

const Text = (props: TextProps) => {
    const { 
        style,
        type,
        weight,
        children,
        textProps
    } = props;

    const customTextStyle = {
        ...TextTypeStyle[type],
        ...WeightType[weight],
        ...style
    }
    return <RNText style={textStyle(customTextStyle).text} {...textProps}>{children}</RNText>
}

export default memo(Text);