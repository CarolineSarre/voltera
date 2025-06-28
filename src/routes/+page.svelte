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
  <a
  class="whatsapp-fab"
  href="https://wa.me/5521986384755?text=Parabéns%20Ana%20Caroline,%20Você%20é%20a%20nova%20dev%20Front%20da%20Voltera"
  target="_blank"
  rel="noopener"
  aria-label="Enviar mensagem no WhatsApp"
>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  width="38"
  height="38"
>
  <path
    fill="#25D366"
    d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L.5 31.5l7.8-2c2.3 1.3 5 2 7.7 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5z"
  />
  <path
    fill="#fff"
    d="M24.1 21.1c-.3.8-1.5 1.4-2.2 1.5-.6.1-1.3.1-2.2-.2-.5-.2-1.1-.4-1.9-.8-3.3-1.5-5.5-4.8-5.7-5-.2-.3-1.4-1.9-1.4-3.6 0-1.8 1-2.7 1.4-3.1.3-.3.7-.4 1-.4h.7c.2 0 .5 0 .7.6.3.7.9 2.2 1 2.3.1.2.1.3 0 .5-.2.4-.5.9-.7 1.1-.1.1-.2.2-.1.4.1.2.4.7.9 1.2.6.7 1.2 1.1 1.3 1.2.2.1.3.1.5-.1.2-.2.8-1 1-1.3.2-.3.4-.3.6-.2.2.1 1.3.6 1.5.7.2.1.4.2.5.3.2.3.2 1 .1 1.4z"
  />
</svg>

</a> 
</main>
