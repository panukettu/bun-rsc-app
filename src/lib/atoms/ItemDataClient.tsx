'use client';

import { use } from 'react';

type Props = {
	promise: Promise<{ id?: string; value: any }>;
};

export function ItemDataClient({ promise }: Props) {
	return <>{use(promise).value}</>;
}
