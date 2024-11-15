import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

register('en', () => import('./en.json'));
register('fr', () => import('./fr.json'));

init({
	fallbackLocale: 'fr',
	initialLocale: getLocaleFromNavigator()
});

/** To suppress EsLint warning when `$json()` is used with `{#each}`
 * ```text
 * Argument of type 'unknown' is not assignable to parameter of type 'ArrayLike<unknown> | Iterable<unknown>'.ts(2345)
 * ```
 *
 * Example :
 *
 * ```svelte
 * {#each _array($json('philosophy.paragraphs')) as paragraph}
 *    <p>{@html paragraph}</p>
 * {/each}
 * ```
 */
export function _array(something: unknown): any[] {
	return <any[]>something;
}
