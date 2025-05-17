import { IconSymbolName } from '@/types/type';
import React from 'react';
import { Pressable, TouchableOpacity } from 'react-native';
import { IconSymbol } from '../ui/IconSymbol';

const StyledTouchable = style(TouchableOpacity);


const CircularIconButton = ({
    iconName,
    onPress,
    size = 48,
    iconSize = 24,
    iconColor = 'white',
    bgColor = 'bg-purple-600',
}: {
    iconName: IconSymbolName;
    onPress: () => void;
    size?: number;
    iconSize?: number;
    iconColor?: string;
    bgColor?: string;
}) => {
    return (
        <Pressable
            className={`items-center justify-center rounded-full ${bgColor}`}
            style={{ width: size, height: size }}
            onPress={onPress}
        >
            <IconSymbol name={iconName} size={iconSize} color={iconColor} />
        </Pressable>
    );
};

export default CircularIconButton;
