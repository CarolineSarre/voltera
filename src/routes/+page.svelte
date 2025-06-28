<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onDestroy } from 'svelte';
  import '../routes/style.css';

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

<main class="container">
  <h1 class="title">Bem-vindo à Voltera</h1>
  <p class="subtitle">Descubra a idade estimada de um nome</p>
  <input
    class="input"
    type="text"
    placeholder="Digite um nome…"
    bind:value={input}
    autocomplete="off"
  />

  {#if data.error}
    <p class="result error">❌ Ocorreu um erro ao buscar a idade.</p>
  {:else if data.age !== null}
    <p class="result">
      Nome: <strong>{data.name}</strong> <br />
      Idade estimada: <strong>{data.age}</strong> anos <br />
      Baseado em <strong>{data.count}</strong> registros.
    </p>
  {/if}
</main>
