import FlashSaleCarousel from '@/components/Carousel/FlashSaleCarousel';
import CategoryFilterBar from '@/components/Filter/CategoryFilterBar';
import ProductList from '@/components/List/ProductList';
import SearchInput from '@/components/SearchInput/SearchInput';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { baseUrl } from '@/constants/BaseUrl';
import { Colors } from '@/constants/Colors';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDebounce } from 'use-debounce';


export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [debouncedSearch] = useDebounce(search, 500);

  const handleChange = (text?: string) => {
    setSearch(text ?? '');
  };

  const { isPending: isPendingCategories, error: errorCategories, data: categories, isFetching: isFetchingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch(
        `${baseUrl}/categories`,
      )
      return await response.json()
    },
  })

  return (
    <SafeAreaView className='flex-1 bg-white'>
      {/* Top Bar */}
      <ThemedView className="h-14 items-center justify-between flex-row px-4">
        <SearchInput onChange={handleChange} value={search} className='w-4/5' />
        <TouchableOpacity>
          <IconSymbol name='message.fill' size={28} color={Colors.light.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconSymbol name='bell.fill' size={28} color={Colors.light.icon} />
        </TouchableOpacity>
      </ThemedView>

      {/* Flash Sale */}
      <ThemedView>
        <FlashSaleCarousel debouncedSearch={debouncedSearch} categoryId={categoryId} priceMax={priceMax} priceMin={priceMin} />
      </ThemedView>

      {/* Filters */}
      <ThemedView>
        <CategoryFilterBar items={categories} isLoading={isPendingCategories} error={errorCategories?.message} onChange={setCategoryId} value={categoryId} />
      </ThemedView>

      {/* Contents */}
      <SafeAreaView className='flex-1 bg-white min-h-[40vh]'>
        <ThemedView>
          <ProductList debouncedSearch={debouncedSearch} categoryId={categoryId} priceMax={priceMax} priceMin={priceMin} />
        </ThemedView>
      </SafeAreaView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
