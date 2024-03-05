/***
12.- (1 punto) Al navegar a la vista de detalle de un libro, se mostrará la imagen en máxima resolución cargándola 
de servidor (http://localhost:4000/[id]/maxres.jpg), el título del libro y la fecha formateada.

Nota: para formatear la fecha puede llamar a la función formatDate que se encuentra en el archivo $lib/utils.js.

Nota: Los datos del vídeo ya están en el cliente y, por lo tanto, no se cargarán desde el servidor.
*/

import { redirect } from '@sveltejs/kit';

/*FUNCION LOAD SOLO PARA EL SERVIDOR*/
//exportamos una funcion la cual se encargara de cargar la informacion que queramos, 
//toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data

//importamos el error de svelteKit
import { redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	//sacamos el objeto fetch del evento junto con los parametros recibidos
	const { params, parent, fetch } = serverLoadEvent;
	//metemos dentro delos parametro el id
	const {slug } = params;
	//esta variable tendra la descripcion correspondiente de cada video
	const response = await fetch(`http://localhost:4000/descriptions/${slug}`);
	//esperamos a que llegue esa respuesta y la transformamos a json
	const descripciones = await response.json();
	//cogemos los videos de parent(para asi tener la info de cada video)
	const {videos}= await parent();
	return {
		slug,
		videos,
		descripciones
	};
};

//es para renderizar la ruta previamente
//export const prerender = true;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
export const loads = async (serverLoadEvent) => {
	console.log('Load function called in page.server.js');
	//(sacamos el objeto fetch del evento junto con los parametros recibidos)
	//parent es para recibir datos de un layout padre(con esto nos evitamos ahcer u nuevo fetch, es decir, cargar de nuevo los videos)

	//Extrae los parámetros de la URL y la función parent del objeto serverLoadEvent. 
	//Los parámetros son parte de la URL y la función parent se utiliza para obtener datos del layout padre.
	const { params,parent } = serverLoadEvent;

	//metemos dentro delos parametro el id
	const {year} = params;//Extraemos el año de los parámetros de la URL

	// Llama a la función parent para obtener los datos de los videos del layout padre. 
	//Esto se hace para evitar hacer una nueva solicitud de red para obtener los datos de los videos, ya que estos datos ya se han cargado en el layout padre.
	const {videos}= await parent();

	return {
		year,
		videos
	};
	
};
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///esto es el codigo que dio javier en el page de http203-[year]
/*
export const load = async (serverLoadEvent) => {
	console.log('Load function called in page.server.js');
	
	const { fetch, params } = serverLoadEvent;
	
	const {id } = params;
	
	const response = await fetch(`http://localhost:4000/${id}/sd.jpg`);
	//http://localhost:4000/[id]/sd.jpg
	if (response.status === 404) {
		throw redirect(307, '/');
	}
	console.log('response', response.status);

	const videos = await response.json();
	const title = `La video numero ${id} es ${videos.title}`;
	return {
		title,
		videos
	};
};
*/