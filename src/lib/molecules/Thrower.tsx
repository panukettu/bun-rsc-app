'use client';

import { useState } from 'react';
import { Button } from '../atoms/Button';

export function Thrower() {
	const [error, setError] = useState(false);
	return (
		<div className="flex flex-col items-start text-sm">
			<Button
				color="bg-red-600"
				hoverColor="hover:bg-red-400"
				onClick={() => {
					setError(true);
				}}>
				Error
			</Button>
			{error && <Throw />}
		</div>
	);
}

function Throw() {
	throw new Error('test');
	// biome-ignore lint/correctness/noUnreachable: <explanation>
	return null;
}
