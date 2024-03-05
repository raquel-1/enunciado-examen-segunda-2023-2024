<script>
	import VideoList from '../../../lib/VideoList.svelte';
	import { formatDate } from '$lib/utils.js';

	export let data; 
	let videos=data.videos;//esto no cambia

	//esto si cambia por eso se declara vacio y sa asigna valor en el $:{  }
	let idFoto;
	let videosFiltrados = [];
	let descripciones = {};
	let htmlContent = '';

	
	
  $: {
    idFoto = data.slug;
    const id = data.slug;
    videosFiltrados = data.videos.filter((video) => id === video.id);
    descripciones = data.descripciones;
    htmlContent = descripciones.description;
  }
</script>
<div>
	
	{#each videosFiltrados as video (video.id)}
		<div>
			<img style="height: 28rem;"
				src="http://localhost:4000/{idFoto}/maxres.jpg"
				alt="{video.title}"
			/>
		</div>
		<div>
			<h1>{video.title}</h1>
			<time>{formatDate(new Date(video.published))}</time>
			<div>{@html htmlContent}</div>
		</div>
	{/each}

	<div>
		<VideoList info={videos}/>
	</div>
</div>

<!--
<div>
	<div>
		<img
			src="http://localhost:4000/azoIMhKOucQ/maxres.jpg"
			alt="How rotate(0) fixed my transform animation | HTTP 203"
		/>
	</div>
	<div>
		<h1>How rotate(0) fixed my transform animation | HTTP 203</h1>
		<time>2022-10-11</time>
		<div>
			<p>
				Jake and Bramus chat about transform animations, in particular how <code>rotate(0)</code>
				can behave differently to <code>none</code>.
			</p>
			<p>
				Spec → <a href="https://goo.gle/3Mpi3wj">https://goo.gle/3Mpi3wj</a><br />Demo →
				<a href="https://goo.gle/3RQGTXb">https://goo.gle/3RQGTXb</a>
			</p>
			<p>
				More videos in the HTTP 203 series → <a href="http://goo.gle/HTTP203"
					>http://goo.gle/HTTP203</a
				><br />Subscribe to Google Chrome Developers here →
				<a href="https://goo.gle/ChromeDevs">https://goo.gle/ChromeDevs</a>
			</p>
			<p>
				Also, if you enjoyed this, you might like the HTTP203 podcast → <a
					href="https://goo.gle/HTTP203Podcast">https://goo.gle/HTTP203Podcast</a
				>
			</p>
			<p>#HTTP203 #ChromeDeveloper #WebDev</p>
		</div>
	</div>
	<div>
		<VideoList />
	</div>
</div>
	
-->


