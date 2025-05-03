<script lang="ts">
	import ChatBox from './ChatBox.svelte';
	import MessageInput from './MessageInput.svelte';
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	<div class="flex h-1/2 w-1/2 flex-col items-center justify-center gap-4">
		<ChatBox />
		<MessageInput />
	</div>
</div>
