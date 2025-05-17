

import useFilteredProducts from '@/hooks/api/useProductsGetListProductHooks';
import { ActivityIndicator, FlatList } from 'react-native';
import ProductCard from '../Card/ProductCard';

const ProductList = ({ debouncedSearch, categoryId, priceMin, priceMax }: { debouncedSearch: string, categoryId?: string, priceMin?: number, priceMax?: number }) => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        error,
    } = useFilteredProducts({ debouncedSearch, categoryId, priceMin, priceMax });

    const items = data?.pages.flatMap(page => page.items) ?? [];

    return (
        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
                <ProductCard item={item} key={item.id} />
            )}
            contentContainerStyle={{ padding: 8 }}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            onEndReached={() => {
                if (hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            }}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
                isFetchingNextPage ? <ActivityIndicator style={{ margin: 16 }} /> : null
            }
        />

    );
}

export default ProductList