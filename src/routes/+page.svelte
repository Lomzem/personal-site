<script lang="ts">
	import ChatBox from './ChatBox.svelte';
	import { msgs } from './messages.svelte.ts';
	import { msgIdx } from './msgIdx.svelte.ts';

	let message = $derived.by(() => {
		if (msgs.length === 0) return '';
		if (msgIdx.msgIdx >= msgs.length) return '';
		return msgs[msgIdx.msgIdx].msg;
	});
	let charsTyped = $state(0);

	let sendReady = $derived(charsTyped >= message.length);
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	<div class="flex h-1/2 w-1/2 flex-col items-center justify-center gap-4">
		<ChatBox />
		<div class="flex w-full items-center gap-2">
			<input
				type="text"
				onkeydown={(e) => {
					e.preventDefault();
					if (!sendReady) {
						charsTyped++;
					}
				}}
				value={message.slice(0, charsTyped)}
				disabled={charsTyped >= message.length}
			/>
			<button
				aria-label="send-message"
				class="transition-opacity duration-300 {sendReady ? '' : 'opacity-30'}"
				onmousedown={() => {
					if (sendReady) {
						msgIdx.msgIdx += 1;
						charsTyped = 0;
					}
				}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>
			</button>
		</div>
	</div>
</div>
