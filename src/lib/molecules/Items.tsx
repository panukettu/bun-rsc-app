import { Item } from '@/lib/atoms/Item';
import { fetchItemLong } from '@/lib/data/api';
import { getQueryClient } from '@/pages/queryClient';
import type { Action } from '@pkxp/bun-rsc/types';
import { type UseQueryOptions, dehydrate } from '@tanstack/react-query';
import { type PropsWithChildren, Suspense } from 'react';
import { Hydrated } from '../external/Providers';

export type FetchServerItem = Action<typeof fetchServerItem>;

export async function fetchServerItem(id: string, time: number) {
	'use server';
	return <Item {...await fetchItemLong(id, time)} color="bg-blue-600" />;
}

export function Items({ children }: PropsWithChildren) {
	return <div className="items">{children}</div>;
}

async function Fetch({ prefetch, children }: PropsWithChildren<{ prefetch: UseQueryOptions[] }>) {
	const queryClient = getQueryClient();
	await Promise.all(prefetch.map(async (query) => queryClient.prefetchQuery(query)));
	return <Hydrated state={dehydrate(queryClient)}>{children}</Hydrated>;
}

export function Prefetched({ children, prefetch }: PropsWithChildren<{ prefetch: UseQueryOptions[] }>) {
	const placeholders = prefetch ? prefetch.map((query) => <Item id={query.queryKey[0] as string} loading />) : null;
	return (
		<Suspense fallback={placeholders}>
			<Fetch prefetch={prefetch}>{children}</Fetch>
		</Suspense>
	);
}
