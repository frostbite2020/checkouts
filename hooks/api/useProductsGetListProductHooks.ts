import { baseUrl } from '@/constants/BaseUrl';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

const LIMIT = 4;

const useFilteredProducts = ({ debouncedSearch, categoryId, priceMin, priceMax }) => {
    const fetchFilteredProducts = useCallback(async ({ pageParam = 0 }) => {
        const params = new URLSearchParams();
        params.append('limit', LIMIT.toString());
        params.append('offset', pageParam.toString());

        if (debouncedSearch) params.append('title', debouncedSearch);
        if (categoryId !== null) params.append('categoryId', String(categoryId));
        if (priceMin !== null) params.append('price_min', String(priceMin));
        if (priceMax !== null) params.append('price_max', String(priceMax));

        const url = `${baseUrl}/products/?${params.toString()}`;
        const response = await fetch(url);
        const data = await response.json();


        return {
            items: data,
            nextOffset: pageParam + LIMIT,
            hasMore: data?.length === LIMIT,
        };
    }, [debouncedSearch, categoryId, priceMin, priceMax]);

    return useInfiniteQuery({
        queryKey: ['products', debouncedSearch, categoryId, priceMin, priceMax],
        queryFn: fetchFilteredProducts,
        getNextPageParam: (lastPage) => lastPage.hasMore ? lastPage.nextOffset : undefined,
        initialPageParam: 0
    });
};

export default useFilteredProducts
