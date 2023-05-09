<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<svelte:head>
	<title>ユーザ詳細画面</title>
</svelte:head>

<h1>ユーザ一覧</h1>
<button on:click={increment}>
	Clicks: {count}
</button>
<ul>
	{#each data.users as user}
		<li><a href={`/user/${user.id}`}>{user.name}</a></li>
	{/each}
</ul>
