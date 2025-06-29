<script>
  import '$lib/styles/name-input.css';
  import { goto } from '$app/navigation';
  import { onDestroy } from 'svelte';

  export let value = '';
  export let debounceDelay = 800;

  let input = value;
  let timer;

  $: {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (input.trim()) {
        params.set('name', input.trim());
      } else {
        params.delete('name');
      }
      goto(`?${params.toString()}`, { replaceState: true, noScroll: true });
    }, debounceDelay);
  }

  onDestroy(() => clearTimeout(timer));
</script>

<input
  class="input"
  type="text"
  placeholder="Digite um nome…"
  bind:value={input}
  autocomplete="off"
/>