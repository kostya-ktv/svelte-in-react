<script>
  export let extraText = "some extra text from hello.svelte";
  export let onClick = () => {};
</script>

<div class="text-3xl font-bold" on:click={onClick}>Hi {extraText}</div>
