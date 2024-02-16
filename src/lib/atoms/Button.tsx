'use client';

import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> & { color?: string; hoverColor?: string };
export function Button({ color = 'bg-indigo-600', hoverColor = 'hover:bg-indigo-400', ...props }: Props) {
	return (
		<button type="submit" {...props} className={clsx('btn', color, hoverColor)}>
			{props.children}
		</button>
	);
}
