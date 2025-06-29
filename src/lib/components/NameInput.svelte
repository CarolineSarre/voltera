<script>
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
<style>.input {
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  background-color: #1e1e1e;
  color: #f1f1f1;
  outline: none;
}

.input::placeholder {
  color: #aaa;
}</style>