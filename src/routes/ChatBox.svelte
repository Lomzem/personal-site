<script lang="ts">
	import { msgs } from './shared/messages.svelte.ts';
	import { msgIdx } from './shared/msgIdx.svelte.ts';
	import { slide } from 'svelte/transition';

	let curMsgs = $derived(msgs.slice(0, msgIdx.msgIdx));

	$effect(() => {
		if (!msgs[msgIdx.msgIdx]) return;
		if (msgs[msgIdx.msgIdx].author === 'Bot') {
			msgIdx.msgIdx++;
		}
	});
</script>

<section class="h-full w-3/4 bg-slate-400">
	{#each curMsgs as msg (msg)}
		<p in:slide={{ delay: msg.delay }}>{msg.msg}</p>
	{/each}
</section>
