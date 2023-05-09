<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>ユーザ詳細画面</h1>
<p>id:{data.user.id}</p>
<p>name:{data.user.name}</p>
