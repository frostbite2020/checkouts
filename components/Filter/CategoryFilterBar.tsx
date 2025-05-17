import React from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import SkeletonCard from '../Skeleton/ProductListSkeleton';
import { IconSymbol } from '../ui/IconSymbol';

const ITEM_WIDTH = 120;

const CategoryFilterBar = ({ items, isLoading = true, error, onChange, value }: { items: any, isLoading?: boolean, error?: string, onChange: (arg: string | null) => void, value: string }) => {

    return (
        <View className="mt-4 px-3 relative">
            <View className='justify-between'>
                {value && <>
                    <TouchableOpacity className="absolute left-3 top-0 bg-white px-4 py-1 rounded-full shadow-md z-10 flex-row">
                        <Text className="text-green-600 font-bold">{items.find((x: any) => x.id == value).name}</Text>
                        <TouchableOpacity onPress={() => onChange(null)}>
                            <IconSymbol name="x.circle.fill" size={20} color="#9ca3af" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </>
                }

                <TouchableOpacity className="absolute right-3 top-0 bg-white px-4 py-1 rounded-full shadow-md z-10">
                    <Text className="text-green-600 font-bold">Filter</Text>
                </TouchableOpacity>
            </View>

            {!error ? (
                <FlatList
                    horizontal
                    data={isLoading ? [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] : items}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={ITEM_WIDTH}
                    decelerationRate="fast"
                    contentContainerStyle={{ paddingTop: 36, paddingHorizontal: 12 }}
                    renderItem={({ item, index }) =>
                        isLoading ? (
                            <SkeletonCard />
                        ) : (
                            <TouchableOpacity
                                className="rounded-2xl overflow-hidden"
                                style={{
                                    width: ITEM_WIDTH - 12,
                                    marginRight: index === items.length - 1 ? 0 : 12,
                                    height: 160,
                                }}
                                onPress={() => onChange(item.id)}
                            >
                                <ImageBackground
                                    source={{ uri: item.image }}
                                    resizeMode="cover"
                                    style={{ flex: 1, justifyContent: 'flex-end' }}
                                    imageStyle={{ borderRadius: 16 }}
                                >
                                    <View className="bg-black/50 p-2 rounded-b-2xl">
                                        <Text className="text-white font-bold text-center text-sm">
                                            {item.name}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    }
                />
            ) : (
                <Text>Something went wrong!</Text>
            )}
        </View>
    );
};

export default CategoryFilterBar;
