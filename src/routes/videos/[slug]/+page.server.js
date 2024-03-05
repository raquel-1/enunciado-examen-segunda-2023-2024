/**
12.- (1 punto) Al navegar a la vista de detalle de un libro, se mostrará la imagen en máxima resolución cargándola 
de servidor (http://localhost:4000/[id]/maxres.jpg), el título del libro y la fecha formateada.(const {videos}= await parent();)

Nota: para formatear la fecha puede llamar a la función formatDate que se encuentra en el archivo $lib/utils.js.

Nota: Los datos del vídeo ya están en el cliente y, por lo tanto, no se cargarán desde el servidor.
*/


/*FUNCION LOAD SOLO PARA EL SERVIDOR*/
//exportamos una funcion la cual se encargara de cargar la informacion que queramos, 
//toda los objetos o constantes que se devuelvan en la funcion load estaran dentro de data

//importamos el error de svelteKit
import { redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	////sacamos el objeto fetch del evento junto con los parametros recibidos///////
	//Esto desestructura el objeto serverLoadEvent, extrayendo las propiedades params, parent y fetch. 
	//Params contiene los parámetros de la ruta de la URL, parent es una función para obtener datos del 
	//padre del componente y fetch es una función para realizar solicitudes HTTP.
	const { params, parent, fetch } = serverLoadEvent;
	//metemos dentro delos parametro el id
	//Aquí, se extrae el valor de slug del objeto params. 
	//slug probablemente represente un identificador único asociado a la página.
	const {slug } = params;
	//esta variable tendra la descripcion correspondiente de cada video
	//Esto realiza una solicitud HTTP a una URL específica, utilizando el valor de slug en la URL para obtener 
	//las descripciones correspondientes. La respuesta de esta solicitud se almacena en la variable response.
	const response = await fetch(`http://localhost:4000/descriptions/${slug}`);
	//esperamos a que llegue esa respuesta y la transformamos a json
	// Aquí, se convierte la respuesta HTTP en formato JSON utilizando el método json() de response. 
	//Esto transforma el cuerpo de la respuesta en un objeto JavaScript.
	const descripciones = await response.json();
	//cogemos los videos de parent(para asi tener la info de cada video)
	// Aquí, se llama a la función parent() para obtener los datos del componente padre
	const {videos}= await parent();
	return {
		slug,
		videos,
		descripciones
	};
};

/**
Sí, en el contexto de SvelteKit o Sapper, los `params` son los parámetros de la URL. 
Cuando defines una ruta en tu aplicación, puedes especificar segmentos de la URL que actúan como parámetros. 
Por ejemplo, en una ruta como `/videos/:id`, `:id` es un parámetro de la URL que puede tomar diferentes valores según la URL que se esté visitando.

Cuando se visita una URL que coincide con la ruta `/videos/:id`, SvelteKit o Sapper extraerán el valor de `id` de la URL 
y lo proporcionarán como parte del objeto `params` en la función `load`.

Por ejemplo, si visitas la URL `/videos/123`, el valor de `params` en la función `load` sería un objeto como `{ id: '123' }`. 
Luego, puedes acceder a este valor dentro de tu función `load` usando la sintaxis de desestructuración como en el código que proporcionaste:

```javascript
const { params } = serverLoadEvent;
const { slug } = params; // Aquí, `slug` es equivalente a `id` en el ejemplo anterior
```

En resumen, los `params` en SvelteKit o Sapper contienen los parámetros de la URL que son dinámicos y pueden cambiar según la URL visitada. 
Estos parámetros se utilizan para cargar datos específicos asociados con esa URL particular.
 */

/**
  const response = await fetch(http://localhost:4000/descriptions/${slug}`);` es una solicitud HTTP que se realiza desde el lado del cliente. 
  Cuando se ejecuta en el servidor, esta solicitud se realiza desde el servidor de SvelteKit
  
 
 
 
  */