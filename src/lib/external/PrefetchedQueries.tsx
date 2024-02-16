'use client';

import { Item } from '@/lib/atoms/Item';
import { fetchItemLong } from '@/lib/data/api';
import { useQueries } from '@tanstack/react-query';

export function PrefetchedQueries({ keys }: { keys: readonly string[] }) {
	const queries = useQueries({
		queries: keys.map((key) => ({ queryKey: [key], queryFn: () => fetchItemLong(key, 2000), staleTime: 10 * 1000 })),
	});

	return (
		<>
			{queries.map((q, i) => (
				<Item key={keys[i]} id={keys[i]} {...q.data} loading={q.isLoading} color="bg-blue-400" />
			))}
		</>
	);
}
