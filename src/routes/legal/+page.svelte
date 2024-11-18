<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.legal_title()}</title>
</svelte:head>

<section class=" as-primary">
	<div class="wrapper title-and-text">

		<header>
			<h1>{m.legal_title()}</h1>
		</header>

	</div>
</section>

<section class=" as-secondary">
	<div class="wrapper title-and-text">

		<header>
			<h2> Éditeur</h2>
		</header>

		<div class="center-in-section">

			<h3>Raison sociale</h3>
			<p>IROCO SAS</p>

			<h3>Adresse du siège social</h3>
			<address>
				3 rue Aristide Briand<br />
				92170 VANVES
			</address>

			<h3>Contact</h3>
			<p><a href="mailto:hello@iroco.co">hello@iroco.co</a></p>

			<h3>Montant du capital social</h3>
			<p>2 000 euros</p>

			<h3>SIRET</h3>
			<p>88942425500012</p>

			<h3>Nom du directeur et/ou co-directeur</h3>
			<p>Adeline AGUT, Bruno THOMAS</p>

		</div>

	</div>
</section>

<section class=" as-secondary">
	<div class="wrapper title-and-text">

		<header>
			<h2>Hébergeur</h2>
		</header>

		<div class="center-in-section">

			<h3>Raison Sociale</h3>
			<p>Eolas SARL</p>

			<h3>Adresse du siège social</h3>
			<address>29 rue Servan<br />
				38000 GRENOBLE
			</address>

			<h3>Téléphone</h3>
			<p><a href="tel:+33476445050">+33 4 76 44 50 50</a></p>

			<h3>Montant du Capital Social</h3>
			<p>28 988 euros</p>

		</div>

	</div>
</section>

