<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import '../app.scss';
	import '../colors.scss';
	import { base } from '$app/paths';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

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

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "WebPage",
					"@id": "https://rezofora.co/",
					"url": "https://rezofora.co/",
					"name": "Rezofora, conseil et accompagnement en numérique responsable.",
					"about": {
						"@id": "https://rezofora.co/"
					},
					"datePublished": "2024-03-08T18:00:00+00:00",
					"dateModified": "2024-03-08T18:00:00+00:00",
					"description": "Mon rôle est de comprendre vos besoins et de vous adresser la meilleure solution avec une seule obsession : le résultat atteint !",
					"inLanguage": "fr-FR",
					"potentialAction": [
						{
							"@type": "ReadAction",
							"target": ["https://rezofora.co/"]
						}
					]
				},
				{
					"@type": "WebSite",
					"@id": "https://rezofora.co/",
					"url": "https://rezofora.co/",
					"name": "Rezofora",
					"description": "Conseil et accompagnement en numérique responsable.",
					"publisher": {
						"@id": "https://rezofora.co/"
					},
					"inLanguage": "fr-FR"
				},
				{
					"@type": ["Person", "Organization"],
					"@id": "https://rezofora.co/",
					"name": "rezofora",
					"sameAs": [
						"https://rezofora.co/",
						"https://rezofora.fr/",
						"https://rezofora.io/",
						"https://rezofora.co/",
						"https://www.linkedin.com/in/adelineagut/"
					]
				}
			]
		}
	</script>
	<meta
		name="description"
		content="Rezofora, conseil et accompagnement en numérique responsable."
	/>
</svelte:head>
<ParaglideJS {i18n}>
	<Header></Header>
	<main id="main">
		{@render children()}
	</main>
	<Footer></Footer>
</ParaglideJS>
