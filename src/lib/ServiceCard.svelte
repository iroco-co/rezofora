<script lang="ts">
	export let anchorId = '';
	export let title = '';
	export let paragraphs: string[] = [];
</script>

<section id={anchorId} class="card">
	<header>
		<h2>{title}</h2>
	</header>
	<div class="card__content">
		{#each paragraphs as paragraph}
			<p>{paragraph}</p>
		{/each}
	</div>
</section>
