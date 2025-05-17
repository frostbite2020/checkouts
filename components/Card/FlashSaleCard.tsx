import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

type FlashSaleCardProps = {
    images: string;
    title: string;
    price: number;
};


const FlashSaleCard = ({ item }: { item: FlashSaleCardProps }) => {
    const { images, title, price } = item;
    const randomNumber = Math.floor(Math.random() * 70) + 1;
    const router = useRouter();

    return (
        <Pressable onPress={() => router.push({ pathname: "/product/[id]", params: { id: item.id } })}>

            <View className="w-28 bg-white rounded-2xl shadow-md overflow-hidden mr-3">
                <View>
                    <Image
                        source={{ uri: images[2] }}
                        className="w-full h-28 rounded-t-2xl"
                        resizeMode="cover"
                    />
                    <View className="absolute bottom-2 left-2 bg-red-500 px-1.5 py-0.5 rounded-md z-10">
                        <Text className="text-xs font-bold text-white">{randomNumber}% OFF</Text>
                    </View>
                </View>
                <View className="p-2">
                    <Text className="text-xs font-bold text-black" numberOfLines={1} ellipsizeMode='tail'>
                        {title}
                    </Text>
                    <Text className="text-xs font-bold text-green-700">
                        ${(price - (price * (randomNumber / 100))).toFixed(2)}
                    </Text>
                    <Text className="text-xs text-gray-400 line-through mt-1">
                        ${price}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default FlashSaleCard;
