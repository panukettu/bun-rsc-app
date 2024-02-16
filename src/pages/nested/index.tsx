import { Nav } from '@/lib/molecules/Nav';
import type { HomeProps } from '..';

export const nestedLinks = [
	{ href: null, label: 'home' },
	{ href: 'nested', label: 'nested' },
	{ href: 'nested/nested', label: 'nestedx2' },
	{ href: 'nested/page', label: 'nested page' },
] as const;

export function Props(props: HomeProps) {
	return {
		nav: <Nav {...props} links={nestedLinks} />,
	};
}
export function Content(props: HomeProps) {
	return <div>Nested Content: {JSON.stringify(props.params)}</div>;
}
