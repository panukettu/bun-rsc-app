import { Counter2 } from '@/lib/molecules/Counter2';
import type { Route } from '@pkxp/bun-rsc/types';
import type { OtherProps } from '.';

type Props = Route<typeof Props> & OtherProps;
export function Props() {
	return {
		title: 'Other Page',
		item: 'misc',
	};
}

export function Content() {
	return (
		<>
			<h2>Misc</h2>
			<Counter2 title="Counter2.js" />
		</>
	);
}
