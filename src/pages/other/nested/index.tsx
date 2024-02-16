import type { OtherProps } from '..';

export function Content(props: OtherProps) {
	return <div>Nested Content: {JSON.stringify(props.params)}</div>;
}
