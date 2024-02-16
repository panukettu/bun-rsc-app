export async function ItemData(props: { id?: string; promise: Promise<any> }) {
	if (!props.id) {
		return <>no data</>;
	}

	const data = await props.promise;
	if (data instanceof Error) {
		return <>error: {data.message}</>;
	}

	return <>{data?.value}</>;
}
