import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from '../ui/IconSymbol';

const SearchInput = ({ className, onChange, value }: { className?: string, onChange: (arg0?: string) => void, value: string }) => {



    return (
        <View className={`px-4 py-2.5 bg-white ${className}`}>
            <View className={`flex-row items-center bg-gray-100 rounded-full px-3 h-10`}>
                <IconSymbol name="safari.fill" size={20} color="#9ca3af" />
                <TextInput
                    className="flex-1 ml-2 text-sm text-gray-900"
                    placeholder="Search products..."
                    placeholderTextColor="#9ca3af"
                    value={value}
                    onChangeText={(e) => onChange(e)}
                />
                {value.length > 0 && (
                    <TouchableOpacity onPress={() => onChange("")}>
                        <IconSymbol name="x.circle.fill" size={20} color="#9ca3af" />
                    </TouchableOpacity>
                )}
            </View>
        </View >
    );
};

export default SearchInput;
