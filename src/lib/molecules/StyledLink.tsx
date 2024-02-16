'use client';

import { Link } from '@pkxp/bun-rsc/Link';
import type { LinkProps } from '@pkxp/bun-rsc/types';
import clsx from 'clsx';

type Props = { route?: string; params?: string } & LinkProps<any>;
export function StyledLink(props: Props) {
	const selected = (props.route === '/' && props.href === null) || props.route?.includes(props.href);

	return (
		<Link className={clsx('font-semibold', selected && 'text-teal-500')} href={props.href}>
			{props.children}
		</Link>
	);
}
