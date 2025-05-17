import React from 'react';
import { View } from 'react-native';

const FlashSaleCardSkeleton = () => {
    return (
        <View className="w-24 bg-white rounded-2xl shadow-md overflow-hidden mr-3">
            <View className="w-full h-24 bg-gray-200 rounded-t-2xl" />

            <View className="p-2">
                <View className="absolute top-2 left-2 bg-gray-300 px-2 py-1 rounded-md z-10 w-14 h-4" />

                <View className="bg-gray-300 h-3 w-16 mt-6 rounded" />
            </View>
        </View>
    );
};

export default FlashSaleCardSkeleton;
