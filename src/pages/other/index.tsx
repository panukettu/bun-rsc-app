import { Item } from '@/lib/atoms/Item';
import { fetchItem } from '@/lib/data/api';
import { Nav } from '@/lib/molecules/Nav';
import type { BaseProps, Route } from '@pkxp/bun-rsc/types';

export type OtherProps = Route<typeof Props>;

const otherLinks = [
	{
		href: null,
		label: 'home',
	},
	{
		href: 'other',
		label: 'other home',
	},
	{
		href: 'other/misc',
		label: 'misc',
	},
	{
		href: 'other/nested/some/params',
		label: 'nested',
	},
] as const;

export function Props(props: BaseProps) {
	return {
		nav: <Nav {...props} links={otherLinks} />,
		data: fetchItem('other-item'),
		title: 'Other Page',
	};
}

export function Layout(props: OtherProps) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<title>{props.title}</title>
				<meta name="description" content={props.title} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body>
				<header className="other-header">{props.nav}</header>
				<h2 className="text-4xl my-4">{props.title}</h2>
				<Item id="Awaited Data" wait={1000} />
				{props.route === '/other' ? 'No content' : props.children(props)}
			</body>
		</html>
	);
}
