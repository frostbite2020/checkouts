import SkeletonCard from '@/components/Skeleton/ProductListSkeleton';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { baseUrl } from '@/constants/BaseUrl';
import { Colors } from '@/constants/Colors';
import { useQuery } from '@tanstack/react-query';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductDetail() {
    const { id } = useLocalSearchParams();

    const { isPending: isPendingProduct, error: errorProduct, data: product, isFetching } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const response = await fetch(
                `${baseUrl}/products/${id}`,
            )
            return await response.json()
        },
    })

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <Stack.Screen
                options={{
                    title: '',
                    headerTransparent: true,
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', gap: 12, marginRight: 12 }}>
                            <TouchableOpacity onPress={() => console.log('Search')}>
                                <IconSymbol name="safari.fill" size={24} color={Colors.light.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('Share')}>
                                <IconSymbol name="sharedwithyou.circle.fill" size={24} color={Colors.light.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('Cart')}>
                                <IconSymbol name="cart.fill" size={24} color={Colors.light.icon} />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
            {
                isPendingProduct ? <SkeletonCard /> : <ScrollView className="bg-white flex-1 px-4 py-6 mt-12">
                    <Image source={{ uri: product.images[0] }} className="w-full h-80 rounded-2xl" resizeMode="cover" />
                    <Text className="text-xl font-bold mt-4">{product.title}</Text>
                    <Text className="text-base font-semibold text-gray-700 mt-1">Price: ${product.price} {product.discount}</Text>

                    <View className="flex-row gap-2 mt-3">
                        <Text className="bg-white px-3 py-1 rounded-full text-sm">{product.category.name}</Text>
                        <Text className="bg-white px-3 py-1 rounded-full text-sm">{product?.reviews} Reviews</Text>
                        <Text className="bg-white px-3 py-1 rounded-full text-sm">{product?.sold} Sold</Text>
                    </View>

                    <Text className="mt-4 text-gray-700 leading-5">{product.description}</Text>
                </ScrollView>
            }

            <View className="flex-row justify-around mt-6 ">
                <Pressable className="px-4 py-2 rounded" style={{ backgroundColor: Colors.light.icon }}>
                    <Text className="text-white">Chat</Text>
                </Pressable>
                <Pressable className="px-4 py-2 rounded" style={{ backgroundColor: Colors.light.icon }}>
                    <Text className="text-white">Add to Cart</Text>
                </Pressable>
                <Pressable className="px-4 py-2 rounded" style={{ backgroundColor: Colors.light.icon }}>
                    <Text className="text-white">Buy Now</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}