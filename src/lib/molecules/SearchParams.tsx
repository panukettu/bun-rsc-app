import type { BaseProps } from '@pkxp/bun-rsc/types';

export function SearchParams(props: Partial<BaseProps>) {
	return (
		<div className="search-params">
			<span>params: {JSON.stringify(props.params ?? '')}</span>
			<span>search: {JSON.stringify(props.search ?? '')}</span>
		</div>
	);
}
