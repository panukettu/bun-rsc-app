import { Nav } from '@/lib/molecules/Nav';
import { nestedLinks } from '.';
import type { HomeProps } from '..';

export function Props(props: HomeProps) {
	return {
		nav: <Nav {...props} links={nestedLinks} />,
	};
}

export function Content(props: HomeProps) {
	return <div>Nested Page: {JSON.stringify(props.params)}</div>;
}
