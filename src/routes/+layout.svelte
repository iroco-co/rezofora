<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import '../app.scss';
	import '../colors.scss';
	import { base } from '$app/paths';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import SchemaOrg from '$lib/SchemaOrg.svelte';

	let { children } = $props();
</script>
<svelte:head>
	<link rel="preconnect" href="{base}/" />
	<link rel="stylesheet" href="{base}/fonts/inter/inter.css" />
	<link rel="stylesheet" href="{base}/style/1_base.css" />
	<link rel="stylesheet" href="{base}/style/2_theming/2.0_theming-config.css" />
	<link rel="stylesheet" href="{base}/style/2_theming/2.1_theming-initial-rules.css" />
	<link rel="stylesheet" href="{base}/style/2_theming/2.2_theming-typesetting.css" />
	<link rel="stylesheet" href="{base}/style/2_theming/2.3_theming-rythm.css" />
	<link rel="stylesheet" href="{base}/style/2_theming/2.5_controls/button.css" />
	<link rel="stylesheet" href="{base}/style/3_features.css" />
	<link rel="stylesheet" href="{base}/style/4_regions.css" />
	<link rel="stylesheet" href="{base}/style/6_components/card.css" />
	<link rel="stylesheet" href="{base}/style/6_components/header-skip-to-content.css" />
	<link rel="stylesheet" href="{base}/style/6_components/hero.css" />
	<link rel="stylesheet" href="{base}/style/6_components/menu.css" />
	<link rel="stylesheet" href="{base}/style/6_components/title-and-text.css" />
</svelte:head>
<ParaglideJS {i18n}>
	<SchemaOrg></SchemaOrg>
	<Header></Header>
	<main id="main">
		{@render children()}
	</main>
	<Footer></Footer>
</ParaglideJS>
