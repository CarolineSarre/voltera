<script>
  import '$lib/styles/api-results.css';
  export let name = '';
  export let age = null;
  export let count = null;
  export let error = false;
</script>

{#if error}
  <p class="result error">❌ Ocorreu um erro ao buscar a idade.</p>
{:else if age !== null}
  <p class="result">
    Nome: <strong>{name}</strong><br />
    Idade estimada: <strong>{age}</strong> anos<br />
    Baseado em <strong>{count}</strong> registros.
  </p>
{/if}
