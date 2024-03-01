import { redirect } from '@sveltejs/kit';

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

