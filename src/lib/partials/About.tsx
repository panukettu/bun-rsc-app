import type { AboutProps } from '@/pages/about';
import type { Resolved } from '@pkxp/bun-rsc/types';
import { Item } from '../atoms/Item';
import { Items } from '../molecules/Items';

export function AboutItem(props: Resolved<AboutProps>) {
	const [, id] = props.params;
	const itemId = id ?? 'About';
	return (
		<Items>
			<Item id={`${itemId} Data`} />
		</Items>
	);
}

export function NoParams(props: Resolved<AboutProps>) {
	return (
		<div className="flex flex-col gap-4 justify-evenly">
			<h4 className="text-2xl">no params sets</h4>
			<div className="flex flex-row gap-4">
				{props.counter}
				<Item {...props.dataAbout} color="bg-blue-500" />
			</div>
		</div>
	);
}
