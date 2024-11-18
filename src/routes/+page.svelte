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
			<!--	TODO: A11Y : treat as complex image : https://www.w3.org/WAI/tutorials/images/complex/ -->
			<img
				id="continuum"
				alt="Continuum of expertise"
				aria-details="continuum-details"
				src="{base}/img/expertises.drawio.svg"
				width="780" height="430"
			/>
			<details id="continuum-details">
				<summary>Une continuité d'expertises</summary>
				<section>
					<p>
						Une informatique respectueuse au niveau du logiciel et de l'infrastructure qui le supporte.
						Vers une entreprise responsable.
					</p>
					<p>Nous nous appuyons sur les référentiels, lois et règlements qui encadrent votre transition :</p>
					<dl>
						<dt><a
							href="https://www.ecologie.gouv.fr/politiques-publiques/numerique-responsable#la-loi-visant-a-reduire-lempreinte-environnementale-du-numerique-reen-1">REEN</a>
						</dt>
						<dd>Loi visant à Réduire l'Empreinte Environnementale du Numérique</dd>
						<dt><a
							href="https://www.ecologie.gouv.fr/politiques-publiques/numerique-responsable#la-loi-anti-gaspillage-et-economie-circulaire-agec-0">AGEC</a>
						</dt>
						<dd>Loi Anti Gaspillage et Économie Circulaire</dd>
						<dt><a href="https://accessibilite.numerique.gouv.fr/">RGAA</a></dt>
						<dd>
							Référentiel Général d’Amélioration de l’Accessibilité.
							Il facilite la mise en accessibilité des sites et services numériques.
							Il est édité par la direction interministérielle du numérique (DINUM).
						</dd>
						<dt><a href="https://www.cnil.fr/fr/comprendre-le-rgpd">RGPD</a></dt>
						<dd>
							Le Règlement Général sur la Protection des Données (RGPD) responsabilise les organismes publics et privés
							qui
							traitent leurs données.
						</dd>
						<dt><a href="https://entreprendre.service-public.fr/actualites/A16970">CSRD</a></dt>
						<dd>
							Reporting Directive (CSRD) fixe de nouvelles normes et obligations de reporting extra-financier.
							Elle concerne les grandes entreprises et les PME cotées en bourse.
						</dd>
					</dl>
					<p></p>
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
				{#each messagesArray('strengths_paragraph', m) as strength}
					<div class="quadrant">
						<p>
							{@html strength}
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
