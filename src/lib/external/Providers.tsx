'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HydrationBoundary } from '@tanstack/react-query';
import { useState } from 'react';

export function Hydrated(props: any) {
	return <HydrationBoundary state={props.state}>{props.children}</HydrationBoundary>;
}

export function Providers(props: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 10 * 1000,
					},
				},
			})
	);

	return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
}
