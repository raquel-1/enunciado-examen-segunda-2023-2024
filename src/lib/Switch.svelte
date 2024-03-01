<script>

export let info;
	const arrayFiltrado = info.map((video) => video.category);
	//creamos un set el cual crea un array sin valores duplicados, lo unico esque se lee como un objeto, por eso tenemos que convertirlo a array
	const filtrar = new Set(arrayFiltrado);
	const videosFiltrados = Array.from(filtrar);//se convierte a array
	//console.log(videosFiltrados);
	//Ordenar los años de forma descendiente(forma en el cliente)
	const videosOrdenados = videosFiltrados.sort((a, b) => b - a);//ascendente; y descendente: (a, b) => a - b

</script>


<ol class="switch">
	<li><a href="/">All</a></li>
	{#each videosOrdenados as video}
		<li><a href="/http203-{video}/">{video}</a></li>
	{/each}
	<!--
		<li><a href="/http203-2022/">2022</a></li>
		<li><a href="/http203-2021/">2021</a></li>
		<li><a href="/http203-2020/">2020</a></li>
		<li><a href="/http203-2019/">2019</a></li>
		<li><a href="/http203-2018/">2018</a></li>
		<li><a href="/http203-2017/">2017</a></li>
		<li><a href="/http203-2016/">2016</a></li>
		<li><a href="/http203-2015/">2015</a></li>
	-->
</ol>

<style>
	.switch{
		background-color: beige;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 0;
	}
</style>