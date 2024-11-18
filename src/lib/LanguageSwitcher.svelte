<script lang="ts">
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';

	const localizedLanguagePath = (newLanguage: AvailableLanguageTag): string => {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		return localisedPath;
	};

</script>

<div class="foo">
	<a href="{localizedLanguagePath('fr')}" hreflang="fr">fr</a>
	<a href="{localizedLanguagePath('fr')}" hreflang="en">en</a>
</div>

<style>
    .foo {
        justify-self: end
    }

    .foo a {
				display: inline-block;
        padding: .5rem;
    }
</style>