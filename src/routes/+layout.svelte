<script>
	import '../app.css';
	export let data;
	const title = data.title;
	let videos = data.videos;
</script>

<div>
	<header>
		<a href="/">
			<span>HTTP 203</span>
		</a>
	</header>
	<div>
		<slot />
	</div>
</div>
