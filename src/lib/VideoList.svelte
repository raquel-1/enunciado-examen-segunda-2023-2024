<script>
	import {formatDate}  from '$lib/utils.js';

	import '../app.css';
	export let info;


  // Función para formatear las fechas en el formato deseado
			function formatVideoDate(dateString) {
				const date = new Date(dateString);
				return formatDate(date); // Usa la función formatDate importada para formatear la fecha
			}
 //en el html:
 //			<time>{formatVideoDate(video.published)}</time> 


</script>
<ol>
<!--
<li>
		<a href="/videos/azoIMhKOucQ"
			><img src="http://localhost:4000/azoIMhKOucQ/sd.jpg" alt="HTTP203 Recap" />
			<p>
				<time>2022-10-11</time>
			</p></a
		>
	</li>
	<li>
		<a href="/videos/k2DRz0KIZAU"
			><img src="http://localhost:4000/k2DRz0KIZAU/sd.jpg" alt="HTTP203 Recap" />
			<p>
				<time>2016-05-16</time>
			</p></a
		>
	</li>
-->

	{#each info as video}
		<li>
			<a href="/videos/{video.id}"
				><img src="http://localhost:4000/{video.id}/sd.jpg" alt="HTTP203 Recap" />
				<p>
					<!--
					<time>{video.published.slice(0, 10)}</time>
					-->
					<!--
					<time>{formatDate(new Date(video.published))}</time>//con esta fincuion no hace falta hacer funcion formatVideoDate
					-->
					<time>{formatVideoDate(video.published)}</time> 
				</p></a
			>
		</li>
	{/each}
	
</ol>





<style>
	ol{
		background-color:lightblue;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		min-height: 50vh;
	}
	li{
		margin: 1rem;
		width: 20rem;
		background-color:white;
		height: 18rem;
	}
	img{
		width: 100%;
	}
	time{
		margin-left: 15px;
		color: black;
		transform: translateY(50px);
		margin-top: 15px;
	}

</style>