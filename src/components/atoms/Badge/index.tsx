import React, { ReactNode } from 'react';
import { memo } from 'react';
import { ViewStyle } from 'react-native';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import Text from '../Text';
import BadgeStyle from './Badge.style';

type BadgeProps = {
    color: string,
    style?: ViewStyle,
    readonly?: boolean,
    onPress?: (e?: GestureResponderEvent) => void,
    children: ReactNode
}
const Badge = (props: BadgeProps) => {
    const {
        color,
        style,
        readonly,
        children,
        onPress
    } = props;
    return(
        <TouchableOpacity disabled={readonly || false} onPress={onPress} style={BadgeStyle({
            backgroundColor: color,
            ...style,
        }).badge}>
              {children}
        </TouchableOpacity>
    )
}

export default memo(Badge);