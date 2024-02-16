'use client';

import { Item } from '@/lib/atoms/Item';
import { fetchItem } from '@/lib/data/api';
import type { FetchServerItem } from '@/lib/molecules/Items';
import { useQuery } from '@tanstack/react-query';
import { startTransition, useState } from 'react';

type Props = {
	fetchServerItem: FetchServerItem;
};

export function Queries({ fetchServerItem }: Props) {
	const query = useQuery({
		queryKey: ['client'],
		queryFn: () => fetchItem('RQ Client'),
		staleTime: 10 * 1000,
	});

	const [state, setState] = useState('RQ Server Action');
	const serverActionQuery = useQuery({
		queryKey: [`client-${state}`],
		queryFn: async () => fetchServerItem(state, 200, { stale: true }),
		staleTime: 10 * 1000,
	});

	return (
		<>
			<Item id="RQ Server" {...query.data} loading={query.isLoading} color="bg-blue-500" />
			<div>
				<input
					type="text"
					className="bg-zinc-200 mb-1 px-1 text-zinc-800 text-xs rounded-sm border-2 border-zinc-400"
					value={state}
					placeholder={state}
					onChange={(e) => {
						startTransition(() => {
							setState(e.target.value);
						});
					}}
				/>
				{!serverActionQuery.data ? (
					<Item
						id={state}
						loading={serverActionQuery.isLoading}
						color={!serverActionQuery.isLoading ? 'bg-blue-600' : 'bg-zinc-600'}
					/>
				) : (
					serverActionQuery.data
				)}
			</div>
		</>
	);
}
