import { redirect } from '@sveltejs/kit';

//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data
export const load = async (serverLoadEvent) => {
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