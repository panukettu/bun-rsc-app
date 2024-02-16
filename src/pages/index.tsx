import { getState, setState } from '@/actions/state';
import { Item } from '@/lib/atoms/Item';
import { type ItemResult, fetchItem } from '@/lib/data/api';
import { PrefetchedQueries } from '@/lib/external/PrefetchedQueries';
import { Providers } from '@/lib/external/Providers';
import { Queries } from '@/lib/external/Queries';
import { Counter } from '@/lib/molecules/Counter';
import { Items, Prefetched, fetchServerItem } from '@/lib/molecules/Items';
import { Nav } from '@/lib/molecules/Nav';
import { ServerState } from '@/lib/molecules/ServerState';
import { Thrower } from '@/lib/molecules/Thrower';
import type { BaseProps, Resolved, Route } from '@pkxp/bun-rsc/types';
import { Suspense } from 'react';

const fonts =
	'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500&family=Roboto:wght@400;500&display=swap';
export type HomeProps = Route<typeof Props>;

/**
 * Props passed to Layout, Content and child page props.
 * Passed directly to Layout but will be resolved before passed to Content.
 * @param props {@link BaseProps} Includes route, search and hono context.
 */
export function Props(props: BaseProps) {
	return {
		nav: <Nav {...props} />,
		data: fetchItem(`${props.route.slice(1).replace('/', '-')} Data`),
		title: 'Home',
		homeData: 'abc123',
		description: 'Bun, Hono, React SSR + RSC',
		counter: <Counter key="home-counter" title="Counter" />,
	};
}

/**
 * Shared layout unless overridden by a page
 * @param props Props passed to Layout and Content
 * @returns Layout and content
 */
export async function Layout(props: HomeProps) {
	return (
		<html lang="en">
			<head>
				<link key={`pre-${fonts}`} rel="preload" href={fonts} as="style" />
				<title>{props.title}</title>
				<meta name="description" content={props.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body>
				{props.nav}
				<section className="sub-header">
					<div className="section">
						<Item {...await props.data} color="bg-green-500" />
						{props.counter}
					</div>
					<ServerState get={getState} value={getState()} set={setState} />
					<Thrower />
				</section>
				<main className="home-content">
					<Providers>{props.children({ ...props, item: fetchItem('Fetch In Layout') })}</Providers>
				</main>
			</body>
		</html>
	);
}

/**
 * Content inside Layout where children is called.
 * @param props Resolved props from Layout
 */
export async function Content(props: Resolved<HomeProps> & { item: ItemResult }) {
	const prefetch = ['RQ Prefetch', 'RQ Prefetch 2'] as const;
	return (
		<Items>
			<Item id="Content Data" color="bg-teal-600" />
			<Item id="Client Content Data" color="bg-teal-600" wait={2400} />
			<Item {...props.item} color="bg-green-600" />
			<Suspense>
				<Prefetched
					prefetch={prefetch.map((key) => ({
						queryKey: [key],
						queryFn: async () => {
							return { id: key, value: 'Prefetched' };
						},
					}))}>
					<PrefetchedQueries keys={prefetch} />
				</Prefetched>
			</Suspense>

			<Queries fetchServerItem={fetchServerItem} />
		</Items>
	);
}
