<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags */

	import { base } from '$app/paths';
	import TeamMember from '$lib/TeamMember.svelte';
	import Partner from '$lib/Partner.svelte';
	import ServiceCard from '$lib/ServiceCard.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { messagesArray, messagesHierarchy } from '$lib/messages.utils';

	const bios = messagesHierarchy<{
		name: string;
		topic: string;
		bio: string;
		picture: string;
	}>('know_us_bios', m);

	const ecosystem_partners = messagesHierarchy<{
		label: string;
		description: string;
		href: string;
		picturePath: string;
	}>('ecosystem_partner', m);
</script>

<svelte:head>
	<title>{m.page_title()}</title>
</svelte:head>

<section id="mission" class="hero">
	<div class="hero-content">
		<header>
			<h1>{m.mission_title()}</h1>
		</header>
		<p>{m.mission_description()}</p>
	</div>
</section>
<section id="services" class="cards">
	<ServiceCard
		anchorId="support"
		title={m.services_support_title()}
		paragraphs={messagesArray('services_support_items', m)}
	/>
	<ServiceCard
		anchorId="training"
		title={m.services_training_title()}
		paragraphs={messagesArray('services_training_items', m)}
	/>
	<ServiceCard
		anchorId="inspire"
		title={m.services_inspire_title()}
		paragraphs={messagesArray('services_inspire_items', m)}
	/>
</section>
<section id="philosophy" class="title-and-text as-secondary">
	<header>
		<h2>{m.philosophy_title()}</h2>
	</header>
	{#each messagesArray('philosophy_paragraph', m) as paragraph}
		<p>
			{@html paragraph}
		</p>
	{/each}
</section>

<section id="how-to-integrate" class="title-and-text as-tertiary">
	<header>
		<h2>{m.integrate_title()}</h2>
	</header>
	<p>
		{m.integrate_paragraph()}
	</p>
	<!--	TODO: A11Y : treat as complex image : https://www.w3.org/WAI/tutorials/images/complex/-->
	<img id="continuum" src="{base}/img/expertises.drawio.svg" width="780" height="430" />
</section>

<section id="strengths" class="title-and-text as-secondary">
		<header>
			<h2>{m.strengths_title()}</h2>
		</header>

	<div class="quadrants">
		{#each messagesArray('strengths_paragraph', m) as strength}
			<div class="quadrant">
				<p>
					{@html strength}
				</p>
			</div>
		{/each}
	</div>
</section>

<section id="know-us" class="title-and-text as-primary" style="margin-bottom: 0;">
	<header>
		<h2>{m.know_us_title()}</h2>
	</header>
	<ul class="grid">
		{#each bios as person}
			<TeamMember
				name={person.name}
				topic={person.topic}
				bio={person.bio}
				picture={person.picture}
			/>
		{/each}
	</ul>
</section>

<section id="ecosystem" class="title-and-text as-secondary">
	<header>
		<h2>{m.ecosystem_title()}</h2>
	</header>

	<ul class="grid">
		{#each ecosystem_partners as ecosystem_partner}
			<Partner
				label={ecosystem_partner.label}
				description={ecosystem_partner.description}
				href={ecosystem_partner.href}
				picturePath={base + ecosystem_partner.picturePath}
			/>
		{/each}
	</ul>
</section>

<style>
    #continuum {
        display: block;
        max-width: 100%;
        max-height: fit-content;
        object-fit: scale-down;
    }



    .quadrants > .quadrant {
        padding: 0.5rem;
    }

	@media only screen and (min-width: 576px) {
		.quadrants {
			display: grid;
			grid-template-columns: 16rem 16rem;
			grid-gap: 0.5rem;
		}

		.quadrants > .quadrant {
			padding: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		.quadrants {
			grid-template-columns: 20rem 20rem;
			grid-gap: 1.25rem;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		grid-column-gap: 1.5rem;
		grid-row-gap: 1.5rem;
	}
</style>
