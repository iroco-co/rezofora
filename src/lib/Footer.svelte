<script lang="ts">
	import Icon from 'svelte-awesome';
	import { envelope, linkedin, github } from 'svelte-awesome/icons';
	import { base } from '$app/paths';
	import mastodon from '$lib/mastodon';
	import * as m from '$lib/paraglide/messages.js';
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="center-in-section">
		<nav aria-label={m.footer_contact_links_aria_label()}>
			<ul>
				<li>
					<a href="mailto:contact@rezofora.co" class="menu_icon">
						<Icon label="mail" data={envelope} scale={1.7} />
					</a>
				</li>
				<li>
					<a href="https://github.com/iroco-co/rezofora" class="menu_icon">
						<Icon label="github" data={github} scale={1.7} />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/company/rezofora/posts/?feedView=all" class="menu_icon">
						<Icon label="linkedin" data={linkedin} scale={1.7} />
					</a>
				</li>
				<li>
					<a rel="me" href="https://mastodon.social/@rezofora" class="menu_icon">
						<Icon label="mastodon" data={mastodon} scale={1.7} />
					</a>
				</li>
			</ul>
		</nav>
		<nav aria-label={m.footer_legal_links_aria_label()}>
			<ul class="menu_items">
				<li><a href="{base}/legal">{m.footer_other_legal()}</a></li>
			</ul>
		</nav>
		<div class="copyright">{m.footer_other_copyrights({ year })}</div>
	</div>
</footer>

<style>
	.menu_icon {
		color: var(--DarkGreen);
		padding: 0.5rem;
		width: 24px;
		height: 24px;
		display: inline-block;
	}

	.menu_icon:hover {
		background-color: #e3f0ea;
	}

	footer {
		background-color: var(--White);
		color: var(--DarkGreen);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	footer > * {
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;
	}

	footer ul {
		list-style-type: none;
	}

	footer li {
		display: inline-block;
	}

	footer a {
		color: var(--DarkGreen);
	}

	.copyright {
		font-size: small;
		color: var(--DarkGreen);
	}

	footer .center-in-section {
		display: flex;
		align-items: center;
	}
</style>
