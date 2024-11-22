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
			<h2>{m.legal_editor_title()}</h2>
		</header>

		<div class="center-in-section">
			<h3>{m.legal_editor_business_name_title()}</h3>
			<p>IROCO SAS</p>

			<h3>{m.legal_editor_business_address_title()}</h3>
			<address>
				3 rue Aristide Briand<br />
				92170 VANVES
			</address>

			<h3>{m.legal_editor_business_contact_title()}</h3>
			<p><a href="mailto:hello@iroco.co">hello@iroco.co</a></p>

			<h3>{m.legal_editor_business_funding_amount_title()}</h3>
			<p>2 000 euros</p>

			<h3>{m.legal_editor_business_siret_title()}</h3>
			<p>88942425500012</p>

			<h3>{m.legal_editor_business_chair_executives_names_title()}</h3>
			<p>Adeline AGUT, Bruno THOMAS</p>
		</div>
	</div>
</section>

<section class=" as-secondary">
	<div class="wrapper title-and-text">
		<header>
			<h2>{m.legal_hosting_title()}</h2>
		</header>

		<div class="center-in-section">
			<h3>{m.legal_hosting_name_title()}</h3>
			<p>Eolas SARL</p>

			<h3>{m.legal_hosting_address_title()}</h3>
			<address>
				29 rue Servan<br />
				38000 GRENOBLE
			</address>

			<h3>{m.legal_hosting_phone_title()}</h3>
			<p><a href="tel:+33476445050">+33 4 76 44 50 50</a></p>

			<h3>{m.legal_hosting_funding_amount_title()}</h3>
			<p>28 988 euros</p>
		</div>
	</div>
</section>
