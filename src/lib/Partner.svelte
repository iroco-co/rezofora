<script lang="ts">
	interface Props {
		label: string;
		description?: string;
		href: string;
		picturePath: string;
	}

	let { label, description, href, picturePath }: Props = $props();
</script>

<li style="list-style: none">
	<figure>
		<a {href} style="display: block; margin-left: auto; margin-right: auto;">
			<img src={picturePath} alt={label} height="81" width="250" style="object-fit: contain" />
		</a>
		<figcaption>
			<p>{description}</p>
		</figcaption>
	</figure>
</li>

<style>
</style>
