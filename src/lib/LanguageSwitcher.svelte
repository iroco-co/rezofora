<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';

	const localizedLanguagePath = (newLanguage: AvailableLanguageTag): string => {
		const canonicalPath = i18n.route($page.url.pathname);
		return i18n.resolveRoute(canonicalPath, newLanguage);
	};
</script>

<div class="language-switcher" aria-label={m.language_switcher_aria_label()}>
	<a href={localizedLanguagePath('fr')} hreflang="fr">fr</a>
	<a href={localizedLanguagePath('fr')} hreflang="en">en</a>
</div>

<style>
	.language-switcher {
		justify-self: end;
	}

	.language-switcher a {
		display: inline-block;
		padding: 0.5rem;
	}
</style>
