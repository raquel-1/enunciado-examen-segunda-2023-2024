import { redirect } from '@sveltejs/kit';
//para cargarlo una vez 
//exportamos una funcion la cual se encargara de cargar la informacion que queramos, toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data
export const load = async (serverLoadEvent) => {
	console.log('Load function called in page.server.js');
	//sacamos el objeto fetch del evento junto con los parametros recibidos
	const { fetch } = serverLoadEvent;
	//Creamos una variable la cual espera hasta que la ruta del producto elegido haya llegado al servidor, y la guarda
	const response = await fetch('http://localhost:4000/videos');
	//si codigo de estado es 404 lanzamos este error personalizado con su mensaje y su pista(hint) o tambien podemos redirigir a la pagina de products
	if (response.status === 404) {
		//throw error(404, { message: 'Product not found', hint: 'Try a different product' });
		throw redirect(307, '/'); //mirar como recoger query params en sveltekit(?), para asu ponerle un mensaje antes de redirigir
	}
	console.log('response', response.status);
	//esperamos a que llegue esa respuesta y la transformamos a json
	const videos = await response.json();
	const title = 'Videos por id';
	return {
		title,
		videos
	};
};