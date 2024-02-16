import type { FallbackProps } from '@pkxp/bun-rsc/types';
import { useState } from 'react';

/**
 * Default error handler for the entire app.
 * Pages can override this by creating another one.
 * @param props Error and reset function
 */
export function Fallback(props: FallbackProps) {
	const [tried, setTried] = useState(false);

	if (!tried) {
		props.reset();
		setTried(true);
		return null;
	}

	return (
		<html lang="en">
			<body>
				<div>Default Error Handler: {props.error.message}</div>
				<pre>{props.error.stack}</pre>
				<button type="reset" onClick={props.reset}>
					Reset
				</button>
			</body>
		</html>
	);
}
