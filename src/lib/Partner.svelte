<script lang="ts">
	export let  label = ''
	export let description = ''
	export let href = ''
	export let picturePath = ''
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
