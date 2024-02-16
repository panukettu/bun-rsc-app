import { Nav } from '@/lib/molecules/Nav';
import { nestedLinks } from '..';
import type { HomeProps } from '@/pages';

export function Props(props: HomeProps) {
	return {
		nav: <Nav {...props} links={nestedLinks} />,
	};
}

export function Content(props: any) {
	return <div>Nestedx2 Content: {JSON.stringify(props.params)}</div>;
}
