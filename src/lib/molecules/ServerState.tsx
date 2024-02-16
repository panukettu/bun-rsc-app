'use client';

import type { GetServerState, SetServerState } from '@/actions/state';
import { Button } from '@/lib/atoms/Button';
import { useState } from 'react';

type Props = { set: SetServerState; get: GetServerState; value: string };

export function ServerState({ set, get, value }: Props) {
	const [state, setState] = useState(value);

	return (
		<div className="server-state">
			<h3 className="title">Server State</h3>
			<div className="value">
				<p>{value}</p>
			</div>
			<div className="actions">
				<div className="w-full sm:max-w-xs">
					<input
						type="text"
						name="new-value"
						id="new-value"
						value={state}
						onChange={(e) => setState(e.target.value)}
						className="input"
						placeholder="Set a new value"
					/>
				</div>
				<div className="btns">
					<Button onClick={() => set(state)}>set & revalidate</Button>

					<Button onClick={() => set(state, { href: '/about' })}>set & go</Button>
				</div>
				<div className="btns">
					<Button onClick={() => set(state, { stale: true })}>set</Button>
					<Button onClick={() => get()}>revalidate</Button>
				</div>
			</div>
		</div>
	);
}
