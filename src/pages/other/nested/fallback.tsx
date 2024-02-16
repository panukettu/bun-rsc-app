import type { ErrProps } from '@pkxp/bun-rsc/server/types';

export function Fallback(props: ErrProps) {
	return (
		<html lang="en">
			<div>Other Nested Error Handler</div>
			<pre>{props.error.stack}</pre>
			<pre>{props.error.message}</pre>
			<button type="reset" onClick={props.reset}>
				Home
			</button>
		</html>
	);
}
