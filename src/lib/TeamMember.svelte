<script lang="ts">
	import { base } from '$app/paths';
	interface Props {
		name: string;
		topic: string;
		bio: string;
		picture: string;
	}

	let { name, topic, bio, picture }: Props = $props();
</script>

<li class="team-member">
	<img
		class="member-picture"
		src={base + picture}
		alt=""
		style="border-radius: 50%;margin: 2rem	"
		width="360"
		height="360"
	/>
	<p style="font-weight: bold;margin: .125rem">{name}</p>
	<p style="font-weight: bold;margin: .125rem">{topic}</p>
	<p style="margin: .125rem">{bio}</p>
</li>

<style type="text/scss">
	.member-picture {
		border-radius: 50%;
		margin: 2rem;
		width: auto;
		height: auto;
	}

	.team-member {
		border-radius: 0.25rem;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.team-member p {
		color: var(--White);
	}
</style>
