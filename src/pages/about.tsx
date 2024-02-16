import { fetchItem } from '@/lib/data/api';
import { AboutItem, NoParams } from '@/lib/partials/About';
import type { Resolved } from '@pkxp/bun-rsc/types';
import type { HomeProps } from '.';

export type AboutProps = HomeProps & ReturnType<typeof Props>;

export function Props(props: HomeProps) {
	const [context] = props.params;
	return {
		content: () => (context === 'item' ? AboutItem : NoParams),
		dataAbout: fetchItem(props.homeData), // from index layout
		description: 'This page is about something.',
		title: 'Home | About',
	};
}

export function Content(props: Resolved<AboutProps>) {
	const El = props.content();
	return <El {...props} />;
}
