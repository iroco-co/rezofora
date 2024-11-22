<script lang="ts">
	interface Props {
		anchorId: string;
		title: string;
		paragraphs: string[];
	}

	let { anchorId, title, paragraphs }: Props = $props();
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

<style>
	.card header {
		margin-bottom: 1.5rem;
	}
</style>
