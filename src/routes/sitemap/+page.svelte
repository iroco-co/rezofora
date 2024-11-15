<script>
	import { sitemap } from '../../sitemap';
	import { base } from '$app/paths';
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.sitemap_title()}</title>
</svelte:head>

<div class="sitemap">
	<section class="sitemap">
		<h1>{m.sitemap_title()}</h1>
		<ul>
			{#each Object.keys(sitemap) as page}
				<li><a href={base + page}>{page}</a></li>
			{/each}
		</ul>
	</section>
</div>
