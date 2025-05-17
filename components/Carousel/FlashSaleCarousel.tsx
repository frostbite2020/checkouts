import { baseUrl } from '@/constants/BaseUrl';
import { Colors } from '@/constants/Colors';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import FlashSaleCard from '../Card/FlashSaleCard';
import FlashSaleCardSkeleton from '../Skeleton/FlashSaleSkeleton';
import { IconSymbol } from '../ui/IconSymbol';

const FlashSaleCarousel = ({ debouncedSearch, categoryId, priceMin, priceMax }: { debouncedSearch: string, categoryId?: string, priceMin?: number, priceMax?: number }) => {
    const { isPending: isPendingFlashSales, error: errorflashSales, data: flashSales, isFetching: isFetchingFlashSales } = useQuery({
        queryKey: ['flashSales'],
        queryFn: async () => {
            const response = await fetch(
                `${baseUrl}/products/?limit=20&offset=0`,
            )
            return await response.json()
        },
    })

    return (
        <View >
            <View className="flex-row justify-between items-center px-4 mb-2">
                <Text className="text-green-700 font-bold text-base">Flash Sale</Text>
                <TouchableOpacity>
                    <IconSymbol name='arrow.right.circle.fill' color={Colors.light.icon} size={20} />
                </TouchableOpacity>
            </View>

            <FlatList
                horizontal
                keyExtractor={(item) => item.id.toString()}
                data={isPendingFlashSales ? [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] : flashSales}
                renderItem={({ item }) =>
                    isPendingFlashSales ? <FlashSaleCardSkeleton /> : <FlashSaleCard
                        item={item}
                    />
                }
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8, paddingTop: 4 }}
            />
        </View>
    );
};

export default FlashSaleCarousel;