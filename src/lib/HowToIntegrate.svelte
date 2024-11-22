<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { base } from '$app/paths';
	import { messagesHierarchy } from '$lib/messages.utils';

	const integrate_long_description_details_refs = messagesHierarchy<{
		term: string;
		href: string;
		description: string;
	}>('integrate_long_description_details_ref', m);
</script>

<div class="wrapper title-and-text">
	<header>
		<h2>{m.integrate_title()}</h2>
	</header>
	<div class="center-in-section">
		<p>
			{m.integrate_paragraph()}
		</p>
		<img
			id="continuum"
			alt=""
			aria-details="continuum-details"
			src="{base}/img/expertises.drawio.svg"
			width="780"
			height="430"
		/>
		<details id="continuum-details">
			<summary>{m.integrate_long_description_summary()}</summary>
			<section>
				<p>{m.integrate_long_description_details_explanation()}</p>
				<dl>
					{#each integrate_long_description_details_refs as referential}
						<dt><a href={referential.href}>{referential.term}</a></dt>
						<dd>{referential.description}</dd>
					{/each}
				</dl>
			</section>
		</details>
	</div>
</div>
