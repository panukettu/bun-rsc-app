import { getState, setState } from '@/actions/state';
import { Item } from '@/lib/atoms/Item';
import { Providers } from '@/lib/external/Providers';
import { Items } from '@/lib/molecules/Items';
import { Nav } from '@/lib/molecules/Nav';
import { ServerState } from '@/lib/molecules/ServerState';
import { StyledLink } from '@/lib/molecules/StyledLink';
import type { BaseProps, Resolved, Route } from '@pkxp/bun-rsc/types';

type Props = Route<typeof Props>;

export function Props(props: BaseProps) {
	return {
		nav: (
			<Nav {...props}>
				<StyledLink href={null}>home</StyledLink>
				<StyledLink href="other">other</StyledLink>
			</Nav>
		),
		title: 'Another Home',
		subtitle: 'Content',
	};
}

export function Layout(props: Props) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<title>{props.title}</title>
				<meta name="description" content="Bun, Elysia, React SSR + RSC" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className="bg-zinc-800">
				{props.nav}
				{props.children(props)}
			</body>
		</html>
	);
}

export function Content(props: Resolved<Props>) {
	return (
		<>
			<h4 className="text-2xl">{props.subtitle}</h4>
			<main className="standalone-content">
				<div className="flex flex-row gap-4">
					<Providers>
						<Items>
							<Item id="Another Data" color="bg-green-400" />
							<Item id="Another Long Data" wait={2000} color="bg-green-600" />
						</Items>
					</Providers>
					<ServerState get={getState} value={getState()} set={setState} />
				</div>
			</main>
		</>
	);
}
