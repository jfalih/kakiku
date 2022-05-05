import React from 'react';
import { GestureResponderEvent, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import RemixIcon from "react-native-remix-icon"
import Colors from '../../atoms/Colors';
import Text from '../../atoms/Text';
import ButtonsStyle from "./Buttons.style"

type ButtonsType = {
    type: keyof typeof ButtonType,
    icon?: string,
    iconColor?: string,
    iconSize?: number,
    color: string,
    //Optional
    readonly?: boolean,
    customIcon?: JSX.Element,
    text?: string,
    textColor?: string,
    style?: ViewStyle,
    onPress?: (e?: GestureResponderEvent) => void,
    customTextStyle?: TextStyle,
    customContainerStyle?: ViewStyle,
}

namespace ButtonType {
    export const ButtonFilled = (_props: ButtonsType): JSX.Element => (
        <TouchableOpacity>

        </TouchableOpacity>
    )
    export const ButtonHelper = (props: ButtonsType): JSX.Element => (
        <TouchableOpacity onPress={props.onPress} disabled={props.readonly || false} style={ButtonsStyle({
            ...props.customContainerStyle
        }).helperContainer} >
            <View style={ButtonsStyle({
                backgroundColor: props.color,   
                marginBottom: props.text ? 5 : 0,
                ...props.style
            }).helper}>
                {props.customIcon || <RemixIcon name={props.icon} color={props.iconColor} size={props.iconSize} />}
            </View>
            { props.text && <Text style={ButtonsStyle({
                color: props.textColor,
                ...props.customTextStyle
            }).textHelper} type={'label'} weight={'reguler'}>{props.text}</Text> }
        </TouchableOpacity>
    )
}

const Buttons = (props: ButtonsType) => {
    const { type } = props;
    const Components = ButtonType[type as keyof typeof ButtonType];
    return <Components {...props} />
}

export default Buttons;