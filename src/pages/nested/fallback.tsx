import type { FallbackProps } from '@pkxp/bun-rsc/types';

export function Fallback(props: FallbackProps) {
	return (
		<html lang="en">
			<div>Nested Error Handler</div>
			<pre>{props.error.stack}</pre>
			<pre>{props.error.message}</pre>
			<button type="reset" onClick={props.reset}>
				Reset
			</button>
		</html>
	);
}
