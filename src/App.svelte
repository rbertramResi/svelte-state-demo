<style>
	button {
	  color: white;
	  background: steelblue;
	}
</style>

<script lang="ts">
	import { buttonClicked } from "./store/actions";
	import { deriveButtonPlayingText, deriveStatusText } from "./store/derived";
</script>

<button on:click={buttonClicked}>{$deriveButtonPlayingText}</button>

<div>Status: {$deriveStatusText}</div>