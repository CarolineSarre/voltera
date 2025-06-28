<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onDestroy } from 'svelte';

  export let data;

  let input = data.name;
  let debounceTimer;

  $: if (input !== undefined) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (input.trim()) {
        params.set('name', input.trim());
      } else {
        params.delete('name');
      }
      goto(`?${params.toString()}`, { replaceState: true, noScroll: true });
    }, 800);
  }

  onDestroy(() => clearTimeout(debounceTimer));
</script>

<style>
  main {
    padding: 2rem;
    font-family: Arial, sans-serif;
  }

  input {
    padding: 0.6rem;
    font-size: 1.2rem;
    border: 1px solid #888;
    border-radius: 6px;
    width: 300px;
  }

  .result {
    margin-top: 1.5rem;
    font-size: 1.3rem;
    color: #333;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
</style>

<main>
  <h1>Bem-vindo!</h1>
  <input
    type="text"
    placeholder="Digite um nome…"
    bind:value={input}
    autocomplete="off"
  />

  {#if data.error}
    <p class="result">❌ Ocorreu um erro ao buscar a idade.</p>
  {:else if data.age !== null}
    <p class="result">
      Nome: <strong>{data.name}</strong> <br />
      Idade estimada: <strong>{data.age}</strong> anos <br />
      Baseado em <strong>{data.count}</strong> registros.
    </p>
  {/if}
</main>
