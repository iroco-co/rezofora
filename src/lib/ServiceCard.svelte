<script lang="ts">
	import { _, json } from 'svelte-i18n';
	import { _array } from '../i18n';

	export let  anchorId = ''
		export let i18nId = ''
</script>

<section id={anchorId} class="card">
	<header>
		<h2>{$_('services.' + i18nId + '.title')}</h2>
	</header>
	<div class="card__content">
		{#each _array($json('services.' + i18nId + '.items')) as paragraph}
			<p>{paragraph}</p>
		{/each}
	</div>
</section>
