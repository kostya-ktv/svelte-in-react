<script>
  import { counter } from "./store";
</script>

<button
  type="button"
  on:click={$counter.increment}
  class="btn btn-success btn-lg m-2"
>
  Svelte count is {$counter.count}
</button>
