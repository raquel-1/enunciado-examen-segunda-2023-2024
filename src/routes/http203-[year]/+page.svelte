<script>
	import Switch from '$lib/Switch.svelte';
	import VideoList from '$lib/VideoList.svelte';
	export let data;
	const videos = data.videos;
	//console.log(videos);

	let videosFiltrados;
	let year;

	 // Esta línea define una reactividad computada.
	//se ejecuta cada vez que cambie alguna variable de las que tengamos declaradas(en este caso year), 
	//por lo tanto esto se hace todas las veces necesarias(reactiva)
	//$: {...}: Define una reactividad computada. Se ejecuta cada vez que cambia alguna variable declarada dentro de su bloque de código.
	$: {
		year = data.year;
		videosFiltrados = videos.filter((video) => year === video.category);
	}
	//console.log(videosFiltrados);
</script>

<div>
	<Switch info = {videos} />
	<!--Le pasamos un key, para que cuando los videos sean diferentes, se muestren esos videos-->
	<!--
		Define una sección que se renderizará condicionalmente dependiendo de la lista de videosFiltrados. 
		El atributo key es necesario para que Svelte identifique de manera única los elementos dentro de esta sección.
	-->
	{#key videosFiltrados}
		<VideoList info = {videosFiltrados} /><!--Renderiza el componente VideoList y le pasa la información de los videos filtrados.-->
	{/key}
</div>



<!--
El atributo key en Svelte se utiliza para ayudar al motor de renderizado a identificar de manera única los 
elementos dentro de listas iteradas, como en un bucle {#each}. Esto es importante para que Svelte pueda realizar 
actualizaciones eficientes en el DOM cuando los datos de la lista cambian.

En tu código, estás utilizando el atributo key dentro de la directiva {#key videosFiltrados}. 
Aquí hay una explicación paso a paso de cómo se utiliza:

Definición de la lista iterada: Utilizas {#key videosFiltrados} para definir la lista que será iterada. 
En este caso, videosFiltrados es la lista de videos filtrados que se mostrarán en VideoList.

Identificación única de elementos: Dentro de esta lista, estás utilizando el atributo key para proporcionar una 
identificación única para cada elemento. Esto se hace para que Svelte pueda identificar cada elemento de manera única 
y realizar actualizaciones eficientes en el DOM cuando cambian los datos.

Rendereo condicional: El contenido dentro de {#key videosFiltrados} se renderizará condicionalmente según 
los datos de la lista. Si los datos de la lista cambian, Svelte puede comparar los elementos antiguos con los nuevos 
utilizando las claves (keys) y actualizar el DOM de manera eficiente solo en los lugares necesarios.

En resumen, el uso del atributo key en {#key videosFiltrados} permite a Svelte identificar de manera única los elementos
dentro de la lista videosFiltrados, lo que facilita la realización de actualizaciones eficientes en el DOM cuando 
cambian los datos de la lista. Esto ayuda a mejorar el rendimiento general de la aplicación al minimizar la manipulación del DOM.
-->