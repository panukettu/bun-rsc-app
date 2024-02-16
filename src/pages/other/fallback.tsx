import type { FallbackProps } from '@pkxp/bun-rsc/types';

export function Fallback(props: FallbackProps) {
	return (
		<html lang="en">
			<div>Other Error Handler: {props.error.message}</div>
		</html>
	);
}
