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

	const integrate_long_description_details_refs = messagesHierarchy<{
		term: string
		href: string
		description: string
	}>('integrate_long_description_details_ref', m);
	const strengths = messagesHierarchy<{
		paragraph: string
	}>('strengths_items', m);
</script>

<svelte:head>
	<title>{m.page_title()}</title>
</svelte:head>

<section id="mission" class="hero">
	<div class="wrapper">
		<div class="hero-content">
			<header>
				<h1>{m.mission_title()}</h1>
			</header>
			<p>{m.mission_description()}</p>
		</div>
	</div>
</section>

<section id="services" style="padding-bottom: 0">
	<div class="wrapper cards">
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
	</div>
</section>

<section id="philosophy" class="as-secondary">
	<div class="wrapper title-and-text ">
		<header>
			<h2>{m.philosophy_title()}</h2>
		</header>
		<div class="center-in-section">
			{#each messagesArray('philosophy_paragraph', m) as paragraph}
				<p>
					{@html paragraph}
				</p>
			{/each}
		</div>
	</div>
</section>

<section id="how-to-integrate" class="as-tertiary">
	<div class="wrapper title-and-text ">
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
				width="780" height="430"
			/>
			<details id="continuum-details">
				<summary>{m.integrate_long_description_summary()}</summary>
				<section>
					<p>{m.integrate_long_description_details_explanation()}</p>
					<dl>
						{#each integrate_long_description_details_refs as referential }
							<dt><a href="{referential.href}">{referential.term}</a>
							</dt>
							<dd>{ referential.description }</dd>
						{/each}
					</dl>
				</section>
			</details>
		</div>
	</div>
</section>

<section id="strengths" class="as-secondary">
	<div class="wrapper title-and-text ">
		<header>
			<h2>{m.strengths_title()}</h2>
		</header>

		<div class="center-in-section">
			<div class="quadrants">
				{#each strengths as { paragraph },index}
					<div class="quadrant">
						<p>
							{@html strength}
							{@html paragraph}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section id="know-us" class="as-primary" style="margin-bottom: 0;">
	<div class="wrapper title-and-text ">
		<header>
			<h2>{m.know_us_title()}</h2>
		</header>
		<div class="center-in-section">
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
		</div>
	</div>
</section>

<section id="ecosystem" class="as-secondary">
	<div class="wrapper title-and-text ">
		<header>
			<h2>{m.ecosystem_title()}</h2>
		</header>
		<div class="center-in-section">
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
		</div>
	</div>
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
            grid-template-columns: 18rem 18rem;
            grid-gap: 0.5rem;
        }

        .quadrants > .quadrant {
            padding: 1rem;
        }
    }

    @media only screen and (min-width: 768px) {
        .quadrants {
            grid-template-columns: 22rem 22rem;
            grid-gap: .75rem;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
    }


</style>
