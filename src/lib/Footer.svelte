<script lang="ts">
	import Icon from 'svelte-awesome';
	import { envelope, linkedin, github } from 'svelte-awesome/icons';
	import { base } from '$app/paths';
	import mastodon from '$lib/mastodon';
	import * as m from '$lib/paraglide/messages.js';
</script>

<footer>
	<nav aria-label="Liens de contact">
		<ul>
			<li>
				<a href="{base}/#" class="menu_icon">
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
				<a href="{base}/#" class="menu_icon">
					<Icon label="mastodon" data={mastodon} scale={1.7} />
				</a>
			</li>
		</ul>
	</nav>
	<nav aria-label={m.footer_aria_label_legal_links()}>
		<ul class="menu_items">
			<li><a href="{base}/legal">{m.footer_other_legal()}</a></li>
			<li aria-hidden="true">|</li>
			<li><a href="{base}/terms">{m.footer_other_terms()}</a></li>
		</ul>
	</nav>
	<div class="copyright">{m.footer_other_copyrights()}</div>
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
        background-color: #e3f0ea
    }

    footer {
        background-color: var(--White);
        color: var(--DarkGreen);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
		footer > * {
				margin-top: .25rem;
				margin-bottom: .25rem;
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
</style>
