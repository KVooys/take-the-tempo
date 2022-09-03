<script>
	import MainNav from './MainNav.svelte'
	import { siteAuthor } from '$lib/config'
</script>

<footer>
	<MainNav />

	<nav>
		<ul>
			<li>
				<a href="/api/rss.xml" rel="external">RSS</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

	<p>
		&copy;{new Date().getFullYear()} {siteAuthor}
	<br/>
	All imagery and other IP belong to <a href="https://legendstory.com">Legend Story Studios®.</a></p>
</footer>