import { fetchItem, fetchItemLong } from '@/lib/data/api';
import clsx from 'clsx';
import { Suspense } from 'react';
import { ItemData } from './ItemData';
import { ItemDataClient } from './ItemDataClient';

type Props = {
	id: string;
	value?: string;
	color?: string;
	loading?: boolean;
	wait?: number;
};

export const Item = ({ color = 'bg-zinc-600', ...props }: Props) => {
	const abbr = props.id
		.split(' ')
		.map((word) => word[0])
		.join('');

	const loading = <div>loading...</div>;
	return (
		<div className="item">
			<div className={clsx(color, 'abbr')}>{abbr}</div>
			<div className="content">
				<div className="font-sm">{props.id}</div>
				<div className="font-light text-xs t">
					{props.value && props.value}
					{props.loading && props.id && !props.value && loading}
					{props.wait && !props.value && (
						<Suspense fallback={<div>loading (in client)..</div>}>
							<ItemDataClient promise={fetchItemLong(props.id, props.wait)} />
						</Suspense>
					)}
					{!props.loading && !props.wait && !props.value && (
						<Suspense fallback={loading}>
							<ItemData id={props.id} promise={fetchItem(props.id)} />
						</Suspense>
					)}
				</div>
			</div>
		</div>
	);
};
