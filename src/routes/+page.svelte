<script>
	import Switch from '$lib/Switch.svelte';
	import VideoList from '../lib/VideoList.svelte';
	export let data;
	const videos = data.videos;

</script>

<div>
	<Switch info={videos}/>
	<VideoList info={videos}/>
</div>
