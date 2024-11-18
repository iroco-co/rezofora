<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	/* eslint-disable svelte/no-at-html-tags */

	let schemaOrg = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': 'https://rezofora.co/',
				url: 'https://rezofora.co/',
				name: m.head_seo_schema_org_webPage_name(),
				about: {
					'@id': 'https://rezofora.co/'
				},
				datePublished: '2024-03-08T18:00:00+00:00',
				dateModified: '2024-03-08T18:00:00+00:00',
				description: m.head_seo_schema_org_webPage_description(),
				inLanguage: m.head_seo_schema_org_webPage_inLanguage(),
				potentialAction: [
					{
						'@type': 'ReadAction',
						target: ['https://rezofora.co/']
					}
				]
			},
			{
				'@type': 'WebSite',
				'@id': 'https://rezofora.co/',
				url: 'https://rezofora.co/',
				name: m.head_seo_schema_org_webSite_name(),
				description: m.head_seo_schema_org_webSite_name(),
				publisher: {
					'@id': 'https://rezofora.co/'
				},
				inLanguage: m.head_seo_schema_org_webSite_inLanguage()
			},
			{
				'@type': ['Person', 'Organization'],
				'@id': 'https://rezofora.co/',
				name: m.head_seo_schema_org_personOrganization_name(),
				sameAs: [
					'https://rezofora.co/',
					'https://rezofora.fr/',
					'https://rezofora.io/',
					'https://rezofora.co/',
					'https://www.linkedin.com/in/adelineagut/'
				]
			}
		]
	};

	const jsonSchemaOrg = JSON.stringify(schemaOrg, null, 2);
	const schemaOrgMarkup = `
${'<'}script type="application/ld+json">
   ${jsonSchemaOrg}
${'<'}/script>`;
</script>

<svelte:head>
	{@html schemaOrgMarkup}

	<meta
		name="description"
		content="Rezofora, conseil et accompagnement en numérique responsable."
	/>
</svelte:head>
