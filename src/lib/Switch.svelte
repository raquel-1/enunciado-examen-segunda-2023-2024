<script>

export let info;
	const arrayFiltrado = info.map((video) => video.category);
	//creamos un set el cual crea un array sin valores duplicados, lo unico esque se lee como un objeto, por eso tenemos que convertirlo a array
	const filtrar = new Set(arrayFiltrado);
	const videosFiltrados = Array.from(filtrar);//se convierte a array
	//console.log(videosFiltrados);

	//Ordenar los años de forma descendiente(forma en el cliente)
	const yearsOrdenados = videosFiltrados.sort((a, b) => b - a);//ascendente; y descendente: (a, b) => a - b
	console.log(yearsOrdenados);

	//OTRA FORMA DE HACERLO
	const arraySinDuplicados = [...filtrar];
	const yearsOrdenados2 = arraySinDuplicados.sort((a, b) => b - a);//ascendente; y descendente: (a, b) => a - b
	console.log(yearsOrdenados2);



	
	//esta variable indicara que boton esta pulsado(que año), se inicializara primero en null, y en el handleClick es cuando ira cambiando su valor
	let activeButton = null;
	//este es el evento que manejamos si hacemos click en el boton, a este evento le pasamos el año en cuestion seleccionado, por lo tanto el activeButton se convertira en ese año
  
	function handleClick(year) {
		 // Si se hace clic en el mismo año que ya está seleccionado, no hacemos nada
		 if (activeButton === year) {
			return;
		}

		// Si se hace clic en "All", simplemente actualizamos activeButton
		if (year === 'All') {
			activeButton = year;
		} else {
			// Si se hace clic en otro año, actualizamos activeButton solo si es diferente al año actualmente seleccionado
			activeButton = year;
		}
	}

	
</script>

<ol class="switch">
    <li>
        <!-- Botón "All" -->
        <button  on:click={() => handleClick(null)} class:orange={!activeButton}>
            <a href="/">All</a>
		</button>        
    </li>
    {#each yearsOrdenados2 as year}
        <li >
            <!-- Botones de los años -->
			<button on:click={() => handleClick(year)} class:orange={activeButton === year}>
				<a href="/http203-{year}/">{year}</a>
			</button>
        </li>
    {/each}
</ol>

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


<style>
	.switch{
		background-color: beige;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: 0;
	}

	.orange {
		background-color: orangered;
	}

</style>