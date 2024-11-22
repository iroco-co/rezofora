<script>
	import { base } from '$app/paths';
	import * as m from '$lib/paraglide/messages.js';
	import LanguageSwitcher from '$lib/LanguageSwitcher.svelte';
</script>

<header>
	<div class="wrapper">
		<nav
			class="header-skip-to-content"
			aria-label={m.header_skip_to_content_aria_label()}
			lang="fr"
		>
			<a href="#main">{m.header_skip_to_content_content()}</a>
		</nav>
		<nav aria-label={m.header_menu_aria_label()} class="menu">
			<a href="{base}/" class="brand-logo">
				<img
					alt={m.header_logo_alt()}
					src="{base}/img/Logo-Rezofora-H-RVB-cropped.svg"
					height="62"
					width="144"
				/>
			</a>
			<div class="items">
				<a href="{base}/#support">{m.header_support()}</a>
				<a href="{base}/#training">{m.header_training()}</a>
				<a href="{base}/#inspire">{m.header_inspire()}</a>
				<a href="{base}/#know-us" class="about">{m.header_about()}</a>
			</div>
		</nav>
		<LanguageSwitcher></LanguageSwitcher>
	</div>
</header>

<style>
	header {
		padding: 0;
		margin: 0;
	}

	.menu {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		margin-top: 0;
		padding: 0 0.5rem;
		margin-bottom: 0.5rem;
		justify-content: center;
		align-items: center;
	}

	.menu > .brand-logo {
		padding: 1rem;
	}

	.brand-logo img {
		object-fit: scale-down;
	}

	.menu > .items {
		margin-top: 0.5rem;
		display: flex;
		gap: 0.125rem;
		align-items: baseline;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.menu > .items > a {
		display: block;
		width: 100%;
		color: var(--DarkGreen);
		font-weight: bold;
		font-size: 1.125rem;
		text-decoration: none;
		text-transform: uppercase;
		padding: 0.25rem;
	}

	.menu > .items > a.about {
		color: var(--DarkOrange);
	}

	@media only screen and (min-width: 576px) {
		header {
			padding: 0;
			margin: 0;
		}

		.menu {
			flex-direction: row;
			justify-content: space-between;
		}

		.menu > .brand-logo {
			padding-top: 0.25rem;
			padding-bottom: 1.25rem;
			margin-top: 0.75rem;
		}

		.menu > .items {
			gap: 0.25rem;
		}

		.menu > .items > a {
			width: auto;
		}
	}

	@media only screen and (min-width: 768px) {
		.menu > .items {
			gap: 1rem;
			margin-top: 2rem;
			align-items: center;
			flex-direction: row;
		}

		.menu > .items > a {
			margin: 0;
		}
	}
</style>
