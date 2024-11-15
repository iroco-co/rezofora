/**
 * ```ts
 * const flat = {
 * 	bios_1_name: () => 'Marc',
 * 	bios_1_photo: () => '/foo.bar.png',
 * 	bios_1_bio: () => 'Blah blah blah',
 * 	bios_2_name: () => 'Elise',
 * 	bios_2_photo: () => '/polop.png',
 * 	bios_2_bio: () => 'Blih bluh blouh'
 * }
 * const hierarchized = messagesHierarchy("bios",flat)
 * ```
 * Will return
 * ```ts
 * [
 * 		{
 * 			name: 'Marc',
 * 			photo: '/foo.bar.png',
 * 			bio: 'Blah blah blah'
 * 		},
 * 		{
 * 			name: 'Elise',
 * 			photo: '/polop.png',
 * 			bio: 'Blih bluh blouh'
 * 		}
 * 	]
 * ```
 *
 * @param suffix
 * @param a
 */
export function messagesHierarchy<T>(suffix: string, a: object): T[] {
	const entries: [string, () => string][] = Object.entries(a)
		.filter(([key]) => key.startsWith(suffix + '_'))
		.map(([key, value]) => [key.split(suffix)[1], value]); // remove suffix from key to allow snake case suffixes

	const keysOrder = new Set(
		entries.map(([key]) => {
			const [, name] = key.split('_');
			return name;
		})
	);
	const map: Map<string, object> = entries
		.map(([key, value]) => {
			const [, name, attribute] = key.split('_');
			return { [name]: { [attribute]: value() } };
		})
		.map((value) => new Map(Object.entries(value)))

		.reduce((previousValue, currentValue) => {
			Array.from(currentValue.keys()).forEach((k) => {
				let old = previousValue.get(k);
				if (old === undefined) old = {};
				const news = { ...old, ...currentValue.get(k) };
				previousValue.set(k, news);
			});
			return previousValue;
		}, new Map());

	const result: unknown[] = [];
	keysOrder.forEach((key) => {
		result.push(map.get(key));
	});
	return <T[]>result;
}

/**
 * ```ts
 * 	messagesArray('strengths',{
 * 			strengths_1: () => '🇫🇷 strengths 1 <strong>Bar</strong>',
 * 			strengths_2: () => '🇫🇷 strengths 2 <strong>Bar</strong>',
 * 			strengths_3: () => '🇫🇷 strengths 3 <strong>Bar</strong>',
 * 		})
 * ```
 *
 * ```ts
 * [
 * 		'🇫🇷 strengths 1 <strong>Bar</strong>',
 * 		'🇫🇷 strengths 2 <strong>Bar</strong>',
 * 		'🇫🇷 strengths 3 <strong>Bar</strong>'
 * 	]
 * ```
 * @param suffix
 * @param a
 */
export function messagesArray(suffix: string, a: object): string[] {
	const map: Map<string, string> = new Map(
		Object.entries(a)
			.filter(([key]) => key.startsWith(suffix + '_'))
			.map(([k, v]) => [k.split(suffix)[1], v]) // remove suffix from key to allow snake case suffixes
			.map(([key, value]) => {
				const [, order] = key.split('_');
				return [order, value()];
			})
	);
	return Array.from(map.values());
}
