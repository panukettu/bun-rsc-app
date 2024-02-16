'use client';

import clsx from 'clsx';
import { useState } from 'react';

export function Counter2({ title }: any) {
	const [count, setCount] = useState(1);
	const [highlight, setHighlight] = useState(false);

	return (
		<div
			className={clsx('counter', highlight && 'bg-white/25')}
			onMouseDown={() => {
				setHighlight(true);
				setCount((v) => v + 1);
			}}
			onMouseLeave={() => {
				setHighlight(false);
			}}
			onMouseUp={() => {
				setHighlight(false);
			}}>
			<span className="text-sm">{title}</span>
			<span className="mt-1 flex items-baseline gap-x-2">
				<span className="text-4xl font-semibold tracking-tight">{count}</span>
				<span className="text-sm text-gray-400">clicks</span>
			</span>
		</div>
	);
}
