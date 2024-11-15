<script>
	import { base } from '$app/paths';
	import * as m from '$lib/paraglide/messages.js';
</script>

<header>
	<nav class="header-skip-to-content" aria-label="Accès rapide" lang="fr">
		<a href="#main">Contenu</a>
	</nav>
	<nav aria-label="Menu" class="menu">
		<a href="{base}/" class="brand-logo">
			<img
				alt="Logo Rezofora"
				src="{base}/img/Logo-Rezofora-H-RVB-cropped.svg"
				height="62"
				width="144"
			/>
		</a>
		<div class="items">
			<a href="{base}/#support">{m.header_support()}</a>
			<a href="{base}/#training">{m.header_training()}</a>
			<a href="{base}/#inspire">{m.header_training()}</a>
			<a href="{base}/#know-us" class="about">{m.header_about()}</a>
		</div>
	</nav>
</header>
