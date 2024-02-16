import type { BaseProps } from '@pkxp/bun-rsc/types';
import { SearchParams } from './SearchParams';
import { StyledLink } from './StyledLink';

const defaultLinks = [
	{ href: null, label: 'home' },
	{ href: 'nested', label: 'nested' },
	{ href: 'nested/nested', label: 'nestedx2' },
	{ href: 'about', label: 'about' },
	{ href: 'about/item/kek', label: 'about kek' },
	{ href: 'standalone', label: 'standalone' },
	{ href: '/other', label: 'other page' },
] as const;

type NavProps<T> = Partial<BaseProps & { links: T; children: any | any[] }>;
export function Nav<T extends readonly any[]>(props: NavProps<T>) {
	const links = props.links || defaultLinks;

	return (
		<header className="nav">
			<div className="items">
				{props.children
					? props.children
					: links.map((link) => {
							const params = props.params?.length ? `/${props.params.join('/')}` : '';
							return (
								<StyledLink key={link.href + link.label} route={`${props.route}${params}`} href={link.href}>
									{link.label}
								</StyledLink>
							);
					  })}
			</div>
			<h2 className="text-4xl">{props.route}</h2>
			<SearchParams search={props.search} params={props.params} />
		</header>
	);
}
