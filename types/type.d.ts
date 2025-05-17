import { SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

const MAPPING = {
    'house.fill': 'home',
    'paperplane.fill': 'send',
    'cart.fill': 'shopping-cart',
    'heart.fill': 'favorite',
    'brain.head.profile.fill': 'person',
    'chevron.left.forwardslash.chevron.right': 'code',
    'chevron.right': 'chevron-right',
    'message.fill': 'messenger',
    'newspaper.fill': 'newspaper'
} as IconMapping;


