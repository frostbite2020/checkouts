import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

const ProductCard = ({ item }: { item: any }) => {
    const router = useRouter();

    return (
        <Pressable onPress={() => router.push({ pathname: "/product/[id]", params: { id: item.id } })} className='max-w-screen'>
            <View className="w-48 bg-white rounded-lg shadow p-2 m-2">
                <Image
                    source={{ uri: item.images[0] }}
                    className="w-full h-28 rounded-lg"
                    resizeMode="cover"
                />
                <Text
                    className="text-sm font-semibold mt-2 h-[40px]"
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {item.title}
                </Text>
                <Text className="text-red-600 font-bold">${item.price}</Text>
                <Text className="text-xs text-gray-500">{item.location}</Text>
                <Text className="text-xs text-yellow-500">{item.category.name}</Text>
            </View>
        </Pressable>
    )
};

export default ProductCard