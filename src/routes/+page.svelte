<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags */
	import group from 'svelte-awesome/icons/group';
	import compass from 'svelte-awesome/icons/compass';
	import handshakeO from 'svelte-awesome/icons/handshakeO';
	import thLarge from 'svelte-awesome/icons/thLarge';
	import { base } from '$app/paths';
	import TeamMember from '$lib/TeamMember.svelte';
	import Partner from '$lib/Partner.svelte';
	// import ServiceCard from '$lib/ServiceCard.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { messagesArray, messagesHierarchy } from '$lib/messages.utils';
	import Icon from 'svelte-awesome';
	import type { IconData } from 'svelte-awesome/components/Icon.svelte';
	import HowToIntegrate from '$lib/HowToIntegrate.svelte';
	import ServiceCard from '$lib/ServiceCard.svelte';

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

	const strengthIcon = (name: string): Record<string, IconData> => <Record<string, IconData>>{
			high_technical_standards: group,
			multidisciplinary_skills: thLarge,
			take_our_customers_further: compass,
			ability_to_support: handshakeO
		}[name];

	const strengths = messagesHierarchy<{
		paragraph: string;
		name: string;
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

<section id="services" style="padding-bottom: 3rem">
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
	<div class="wrapper title-and-text">
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
	<HowToIntegrate />
</section>

<section id="strengths" class="as-secondary">
	<div class="wrapper title-and-text">
		<header>
			<h2>{m.strengths_title()}</h2>
		</header>
		<div class="center-in-section">
			<div class="quadrants">
				{#each strengths as { paragraph, name }}
					<div id={`strength_${name}`} class="quadrant">
						<p>
							<span style="vertical-align: middle">
								<Icon data={strengthIcon(name)} scale={1} />
							</span>
							{@html paragraph}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section id="know-us" class="as-primary" style="margin-bottom: 0;">
	<div class="wrapper title-and-text">
		<header>
			<h2>{m.know_us_title()}</h2>
		</header>
		<div class="center-in-section">
			<ul class="grid">
				{#each bios as { name, topic, bio, picture }}
					<TeamMember {name} {topic} {bio} {picture} />
				{/each}
			</ul>
		</div>
	</div>
</section>

<section id="ecosystem" class="as-secondary">
	<div class="wrapper title-and-text">
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
			grid-gap: 0.75rem;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		grid-column-gap: 1.5rem;
		grid-row-gap: 1.5rem;
	}
</style>
